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

    try {
        const build = (await api.addBuildToQueue(config));
        const execConfig = await api.startBuild({
            buildId: build.data.id,
            dateTime: new Date().toISOString()
        });
        execBuild(JSON.parse(execConfig));
        return res.status(200).json({
            build: build.data
        });
    } 
    catch (error) {
        return res.status(500).json({ 
            error: error
        })
    }
};

const execBuild = async ({ buildId, dateTime }) => {
    const settings = await api.getSettings();
    const buildCommand = settings.data.buildCommand;
    const mainBranch = settings.data.mainBranch;

    try {
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
    }
    catch (error) {
        console.log('error', error)
    }
}
