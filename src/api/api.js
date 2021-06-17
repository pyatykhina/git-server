const axiosInstance = require('./axiousInstance');

module.exports = {
    getAllBuilds() {
        return axiosInstance()
            .get('/build/list')
            .then(response => response);
    },

    getSettings() {
        return axiosInstance()
            .get('/conf')
            .then(response => response);
    }
}
