const api = require('../../api/api');

module.exports = async (req, res) => {
    await api.getSettings()
        .then(response => {
            return res.status(200).json({ 
                settings: response.data 
            })
        })
        .catch(error => {
            return res.status(error.response.status).json({ 
                    error: error.response.statusText 
                })
        });
};
