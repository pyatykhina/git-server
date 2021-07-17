import axiosInstance from './axiousInstance';

export default {
    getSettings() {
        return axiosInstance()
            .get('/conf')
            .then(response => response.data);
    },

    setSettings(config: object) {
        return axiosInstance()
            .post('/conf', config)
            .then(response => response);
    },

    getAllBuilds(offset: number, limit: number) {
        return axiosInstance()
            .get(`/build/list?offset=${offset}&limit=${limit}`)
            .then(response => response.data);
    },

    addBuildToQueue(config: object) {
        return axiosInstance()
            .post('/build/request', config)
            .then(response => response.data);
    },

    startBuild(config: object) {
        return axiosInstance()
            .post('/build/start', config)
            .then(response => response.config.data);
    },

    finishBuild(config: object) {
        return axiosInstance()
            .post('/build/finish', config)
            .then(response => response.data);
    },

    getBuild(buildId: string) {
        return axiosInstance()
            .get(`/build/details?buildId=${buildId}`)
            .then(response => response.data);
    },

    getLogs(buildId: string) {
        return axiosInstance()
            .get(`/build/log?buildId=${buildId}`)
            .then(response => response.data);
    }
}
