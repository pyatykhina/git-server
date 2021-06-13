const axiosAPI = require("./axiousInstance");

module.exports = {
    async getAllBuilds() {
        const axiosInstance = await axiosAPI();
        return axiosInstance
            .get("/build/list")
            .then(response => {
                if (response.status === 200) {
                    return response.data;
                }
            })
            .catch(() => []);
    }
}
