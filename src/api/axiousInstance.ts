import axios from 'axios';

export default function getAxiosInstance() {
    return axios.create({
        baseURL: 'https://shri.yandex/hw/api',
        withCredentials: true,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.TOKEN}`
        }
    });
}
