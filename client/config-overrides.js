const UnusedModulesPlugin = require("../UnusedModulesPlugin");

module.exports = function override(config, env) {
    config.plugins.push(new UnusedModulesPlugin({
        directory: __dirname
    }));

    return config;
}
