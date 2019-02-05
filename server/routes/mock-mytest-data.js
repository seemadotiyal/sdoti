var path = require("path");

// export the routes to be used in express/json-server in app.js
module.exports = function() {
    const routes = {};
    const mytestJson = require(path.resolve(__dirname, '../../C001.json'));

    routes["asset/:id"] = mytestJson;

    return routes;
};
