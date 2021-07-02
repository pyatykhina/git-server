const api = require('../../api/api');
// var Convert = require('ansi-to-html');
// var convert = new Convert({ bg: '#fff', fg: '#000' });

module.exports = async (req, res) => {
    const buildId = req.originalUrl.split('/')[3];

    await api.getLogs(buildId)
        .then(response => {
            console.log(response)
            return res.status(200).json({ 
                // logs: convert.toHtml(response.logs) 
                logs: response.logs
            })
        })
        .catch(error => {
            console.log(error)
            return res.status(error.response.status).json({ 
                    error: error.response.statusText 
                })
        });
};
  