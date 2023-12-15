"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_routes_1 = require("./base.routes");
//import { routes as itemRouter } from './item.routes'
const auth_routes_1 = require("./auth.routes");
const post_routes_1 = require("./post.routes");
const routes = (server) => {
    server.use('/', new base_routes_1.BaseRoutes().router);
    //server.use('/item', itemRouter)
    server.use('/auth', auth_routes_1.routes);
    server.use('/post', post_routes_1.routes);
};
exports.default = routes;
//# sourceMappingURL=routes.js.map