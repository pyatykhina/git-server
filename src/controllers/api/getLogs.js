const api = require('../../api/api');
var Convert = require('ansi-to-html');
var convert = new Convert({ bg: '#fff', fg: '#000' });

module.exports = async (req, res) => {
    const buildId = req.originalUrl.split('/')[3];

    await api.getLogs(buildId)
        .then(response => response.logs && (
            res.status(200).json({ 
                logs: convert.toHtml(JSON.parse(response.logs)) 
            })
        ))
        .catch(error => {
            console.log(error)
            return res.status(error.response.status).json({ 
                    error: error.response.statusText 
                })
        });
};
  