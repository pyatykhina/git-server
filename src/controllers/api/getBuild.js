const api = require('../../api/api');

module.exports = async (req, res) => {
    const buildId = req.body.buildId;

    await api.getAllBuilds(buildId)
        .then(response => {
            return res.status(200).json({ 
                build: response.data 
            })
        })
        .catch(error => {
            return res.status(error.response.status).json({ 
                    error: error.response.statusText 
                })
        });
};
  