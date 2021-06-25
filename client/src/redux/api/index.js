const axios = require('axios');

export const api = {

    getSettings() {
        return axios
            .get("/api/settings")
            .then(response => {
                if (response.status === 200) {
                    return response.data;
                }
            })
            .catch(error => error.response);
    },

    setSettings(config) {
        return axios
            .post("/api/settings", config)
            .then(response => {
                if (response.status === 200) {
                    return response.data;
                }
            })
            .catch(error => error.response);
    },

    getAllBuilds() {
        return axios
            .get("/api/builds")
            .then(response => {
                if (response.status === 200) {
                    return response.data;
                }
            })
            .catch(error => error.response);
    },

    addBuildToQueue(commitHash) {
        return axios
            .post(`/api/builds/${commitHash}`)
            .then(response => {
                if (response.status === 200) {
                    return response.data;
                }
            })
            .catch(error => error.response);
    },

    getBuild(buildId) {
        return axios
            .get(`/api/builds/${buildId}`)
            .then(response => {
                if (response.status === 200) {
                    return response.data;
                }
            })
            .catch(error => error.response);
    },

    getLogs(buildId) {
        return axios
            .get(`/api/builds/${buildId}/logs`)
            .then(response => {
                if (response.status === 200) {
                    return response.data;
                }
            })
            .catch(error => error.response);
    }

}
