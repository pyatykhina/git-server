const axios = require('axios');
const accessToken = require('../../token');

module.exports = function getAxiosInstance() {
    return axios.create({
        baseURL: 'https://shri.yandex/hw/api',
        withCredentials: true,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`
        }
    });
}
