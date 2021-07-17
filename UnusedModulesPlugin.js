const fs = require('fs');
const path = require('path');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);

class UnusedModulesPlugin {
    constructor(options = {}) {
        this.options = { ...UnusedModulesPlugin.defaultOptions, ...options };
    }

    apply(compiler) {
        const allFiles = [];
        const usedFiles = [];
        const unusedFiles = [];

        // file is in gitignore
        const gitignore = fs.readFileSync('.gitignore', { encoding: 'utf-8' }) || "";
        const fileShouldBeIgnored = file => {
            const ignoredFiles = gitignore.split('\n').filter(str => str !== "" && str[0] !== "#");
            let res = false;

            ignoredFiles.forEach(str => {
                if(file.includes(str)) res = true;
            })
            
            return res;
        }


        // finding all files
        (function findAllFiles(currentDir) {
            fs.readdir(currentDir, function (err, files) {
                if (err) throw err;

                files.forEach(file => {
                    const filePath = path.join(currentDir, file);
                    const stat = fs.statSync(filePath);

                    if (!fileShouldBeIgnored(filePath)) {
                        if (stat.isFile()) {
                            allFiles.push(filePath);
                            return;
                        } else if (stat.isDirectory()) {
                            findAllFiles(filePath);
                        }
                    } else return;
                });
            });
        }(this.options.directory));


        // finding used files
        compiler.hooks.afterCompile.tap(
            'UnusedModulesPlugin',
            (compilation) => {
                compilation.fileDependencies.forEach(file => !fileShouldBeIgnored(file) && usedFiles.push(file));
            }
        );


        // writing unused.json
        compiler.hooks.done.tap(
            'UnusedModulesPlugin',
            // eslint-disable-next-line no-unused-vars
            (stats) => {
                allFiles.forEach(file => {
                    !usedFiles.includes(file) && unusedFiles.push(file);
                });
                writeFileAsync(
                    'unused.json', 
                    JSON.stringify(unusedFiles, null, '\t'), 
                    { encoding: 'utf-8' }
                );
            }
        );
    } 
}

module.exports = UnusedModulesPlugin;
  