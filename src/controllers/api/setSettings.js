const api = require('../../api/api');
const{ exec } = require('child_process');

module.exports = async (req, res) => {
    const config = {
        repoName: req.body.repoName,
        buildCommand: req.body.buildCommand,
        mainBranch: req.body.mainBranch,
        period: req.body.period
    };

    exec(`git clone ${config.repoName} local-repo`);

    await api.setSettings(config)
        .then(response => {
            return res.status(200).json({
                settings: JSON.parse(response.config.data)
            });
        })
        .catch(error => {
            return res.status(error.response.status).json({ 
                error: error.response.statusText 
            })
        });
};
  