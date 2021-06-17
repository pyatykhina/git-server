const api = require('../../api/api');

module.exports = async (req, res) => {
    await api.getAllBuilds()
        .then(response => {
            return response.status(200).json({ 
                allBuilds: response.data 
            })
        })
        .catch(error => {
            return res.status(error.response.status).json({ 
                    error: error.response.statusText 
                })
        });
};
