"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_routes_1 = require("./base.routes");
const item_routes_1 = require("./item.routes");
const auth_routes_1 = require("./auth.routes");
const routes = (server) => {
    server.use('/', new base_routes_1.BaseRoutes().router);
    server.use('/item', item_routes_1.routes);
    server.use('/auth', auth_routes_1.routes);
};
exports.default = routes;
//# sourceMappingURL=routes.js.map