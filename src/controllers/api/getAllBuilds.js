const api = require('../../api/api');
const db = require('../../db/Database');
const Builds = require('../../db/Builds');

module.exports = async (req, res) => {
    await api.getAllBuilds()
        .then(response => {
            response.data.data.forEach(async item => {
                const buildsFile = new Builds(item);
                await db.insertBuild(buildsFile, JSON.stringify(item));
            });

            return res.status(200).json({ 
                allBuilds: response.data 
            })
        })
        .catch(error => {
            return res.status(error.response.status).json({ 
                    error: error.response.statusText 
                })
        });
};
