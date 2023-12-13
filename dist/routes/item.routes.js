"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const item_controller_1 = require("../controllers/item.controller");
const session_middleware_1 = require("../middleware/session.middleware");
const routes = (0, express_1.Router)();
exports.routes = routes;
routes.use(session_middleware_1.checkJwt);
routes.get('/', item_controller_1.getItems);
routes.get('/:id', item_controller_1.getItem);
routes.post('/', item_controller_1.postItem);
routes.put('/:id', item_controller_1.updateItem);
routes.delete('/:id', item_controller_1.deleteItem);
//# sourceMappingURL=item.routes.js.map