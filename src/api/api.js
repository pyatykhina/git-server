const axiosInstance = require('./axiousInstance');

module.exports = {
    getSettings() {
        return axiosInstance()
            .get('/conf')
            .then(response => response);
    },

    setSettings(config) {
        return axiosInstance()
            .post('/conf', config)
            .then(response => response);
    },

    getAllBuilds() {
        return axiosInstance()
            .get('/build/list')
            .then(response => response);
    }
}
