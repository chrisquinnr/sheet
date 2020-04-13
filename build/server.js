"use strict";
exports.__esModule = true;
require('dotenv').config();
require("./sheets");
var Koa = require("koa");
var KoaRouter = require("koa-router");
var bodyParser = require("koa-bodyparser");
var gzip = require("koa-compress");
var routes_1 = require("./routes");
var port = process.env.PORT || 4000;
var app = new Koa();
app.use(bodyParser());
app.use(gzip());
// tsoa magic
var router = new KoaRouter();
routes_1.RegisterRoutes(router);
app.use(router.routes()).use(router.allowedMethods());
process.on('uncaughtException', function (err) {
    console.error(err);
    process.exit(1);
});
var createAndRunServer = function () {
    return app.listen(port, function () {
        console.log("Listening on http://localhost:" + port);
    });
};
createAndRunServer();
