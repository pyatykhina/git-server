const api = require('../../api/api');
const db = require('../../db/database');
const Builds = require('../../db/Builds');

module.exports = async (req, res) => {
    const offset = req.query.offset;
    const limit = req.query.limit;

    await api.getAllBuilds(offset, limit)
        .then(response => {
            response.data.forEach(async item => {
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
