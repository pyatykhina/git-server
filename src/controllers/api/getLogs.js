const api = require('../../api/api');

module.exports = async (req, res) => {
    const buildId = req.originalUrl.split('/')[3];

    await api.getLogs(buildId)
        .then(response => {
            return res.status(200).json({ 
                logs: response.data 
            })
        })
        .catch(error => {
            return res.status(error.response.status).json({ 
                    error: error.response.statusText 
                })
        });
};
  