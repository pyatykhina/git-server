const api = require('../../api/api');

module.exports = async (req, res) => {
    const allBuilds = await api.getAllBuilds();
    console.log('allBuilds', allBuilds)
    return res.json({ allBuilds: allBuilds });
};
