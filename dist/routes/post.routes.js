"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const post_controller_1 = require("../controllers/post.controller");
const session_middleware_1 = require("../middleware/session.middleware");
const routes = (0, express_1.Router)();
exports.routes = routes;
const controller = new post_controller_1.PostController();
routes.get('/', controller.getPosts);
routes.get('/:slug', controller.getPostBySlugId);
routes.post('/', session_middleware_1.checkJwt, controller.newPost);
//# sourceMappingURL=post.routes.js.map