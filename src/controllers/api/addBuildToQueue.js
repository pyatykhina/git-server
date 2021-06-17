const api = require('../../api/api');
const{ execSync } = require('child_process');

module.exports = async (req, res) => {
    const commitHash = req.originalUrl.split('/')[3];

    const commit = execSync(`
        cd local-repo
        git log --oneline --pretty=format:"%H, %an, %s"
    `, {
        encoding: 'utf8'
    }).split('\n').find(e => e.includes(commitHash)).split(', ');

    const branch = execSync(`
        cd local-repo
        git branch
    `, {
        encoding: 'utf8'
    }).split('\n')[0].split(' ')[1];

    const config = {
        commitMessage: commit[2],
        commitHash: commitHash,
        branchName: branch,
        authorName: commit[1]
    };

    await api.addBuildToQueue(config)
        .then(() => {
            return res.status(200).json();
        })
        .catch(error => {
            return res.status(error.response.status).json({ 
                error: error.response.statusText 
            })
        });
};
