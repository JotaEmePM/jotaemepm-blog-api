"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const auth_controller_1 = require("../controllers/auth.controller");
const routes = (0, express_1.Router)();
exports.routes = routes;
routes.post('/register', auth_controller_1.register);
routes.post('/login', auth_controller_1.login);
//# sourceMappingURL=auth.routes.js.map