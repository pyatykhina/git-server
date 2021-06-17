const axiosInstance = require('./axiousInstance');

module.exports = {
    getAllBuilds() {
        return axiosInstance()
            .get('/build/list')
            .then(response => response);
    }
}
