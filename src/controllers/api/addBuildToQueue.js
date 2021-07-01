const api = require('../../api/api');
const{ exec, execSync } = require('child_process');

module.exports = async (req, res) => {
    const commitHash = req.params.commitHash;

    const commit = execSync(`
        cd local-repo
        git log --oneline --pretty=format:"%H, %an, %s"
    `, {
        encoding: 'utf8'
    }).split('\n').find(e => e.includes(commitHash)).split(', ');

    const branch = execSync(`
        cd local-repo
        git rev-parse --abbrev-ref HEAD 
    `, {
        encoding: 'utf8'
    }).split('\n')[0];

    const config = {
        commitMessage: commit[2],
        commitHash: commitHash,
        branchName: branch,
        authorName: commit[1],
        start: new Date().toISOString(),
        duration: 0
    };

    await api.addBuildToQueue(config)
        .then(async response => {
            await api.startBuild({
                buildId: response.data.id,
                dateTime: new Date().toISOString()
            })
            .then(response => execBuild(response))
            .catch(error => console.log('error', error.response));
            return res.status(200).json({
                build: response.data
            });
        })
        .catch(error => {
            return res.status(error.response.status).json({ 
                error: error.response.statusText 
            })
        });
};

const execBuild = async ({ buildId, dateTime }) => {
    await api.getSettings()
        .then(response => {
            const buildCommand = response.data.buildCommand;
            const mainBranch = response.data.mainBranch;

            exec(`
                cd local-repo
                git checkout ${mainBranch}
                ${buildCommand}
            `, async (error, stdout, stderr) => {
                if (error) {
                    await api.finishBuild({
                        buildId: buildId,
                        duration: new Date() - new Date(dateTime),
                        success: false,
                        buildLog: stdout.toString()
                    })
                    return;
                }

                await api.finishBuild({
                    buildId: buildId,
                    duration: new Date() - new Date(dateTime),
                    success: true,
                    buildLog: stdout.toString()
                })
                return;
            });
        })
        .catch(error => console.log('error', error.response));;
}
