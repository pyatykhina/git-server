const api = require('../../api/api');
const db = require('../../db/database');
const Settings = require('../../db/Settings');

module.exports = async (req, res) => {
    await api.getSettings()
        .then(async response => {
            const settingsFile = new Settings(response.data.data);
            await db.insertSettings(settingsFile, JSON.stringify(response.data.data));

            return res.status(200).json(response.data)
        })
        .catch(error => {
            return res.status(error.response.status).json({ 
                error: error.response.statusText 
            })
        });
};
