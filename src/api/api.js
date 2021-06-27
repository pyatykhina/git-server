const axiosInstance = require('./axiousInstance');

module.exports = {
    getSettings() {
        return axiosInstance()
            .get('/conf')
            .then(response => response.data);
    },

    setSettings(config) {
        return axiosInstance()
            .post('/conf', config)
            .then(response => response);
    },

    getAllBuilds() {
        return axiosInstance()
            .get('/build/list')
            .then(response => response.data);
    },

    addBuildToQueue(config) {
        return axiosInstance()
            .post('/build/request', config)
            .then(response => response);
    },

    getBuild(buildId) {
        return axiosInstance()
            .get(`/build/details/${buildId}`)
            .then(response => response);
    },

    getLogs(buildId) {
        return axiosInstance()
            .get(`/build/log/${buildId}`)
            .then(response => response);
    }
}
