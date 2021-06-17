const api = require('../../api/api');
const db = require('../../db/Database');
const Settings = require('../../db/Settings');

module.exports = async (req, res) => {
    await api.getSettings()
        .then(async response => {
            const settingsFile = new Settings();
            await db.insert(settingsFile, JSON.stringify(response.data.data));

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
