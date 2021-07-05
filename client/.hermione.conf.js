module.exports = {
    baseUrl: "http://localhost:3001/",
    gridUrl: "http://127.0.0.1:4444/wd/hub",

    browsers: {
        chrome: {
            desiredCapabilities: {
                browserName: "chrome"
            }
        }
    },

    plugins: {
        "html-reporter/hermione": {
            path: "hermione-html-report"
        },
        "hermione-url-decorator": {
            query: {
                "enable_exp": "1"
            }
        },
        "hermione-selenium-standalone-runner": true
    }
};
