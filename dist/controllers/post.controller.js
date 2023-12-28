"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostController = void 0;
const post_service_1 = require("../services/post.service");
const error_handle_1 = require("../utils/error.handle");
class PostController {
    constructor() { }
    getPosts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { search, page } = req.query;
                const response = yield (0, post_service_1.getPosts)(page, search);
                res.status(200).send(response);
            }
            catch (e) {
                (0, error_handle_1.handleHttp)(res, 'ERROR_POST_GET', e);
            }
        });
    }
    getPostBySlugId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { slug } = req.params;
                const slugStr = (slug !== null) ? slug === null || slug === void 0 ? void 0 : slug.toString() : '';
                const response = yield (0, post_service_1.getPost)(slugStr);
                res.status(200).send(response);
            }
            catch (e) {
                (0, error_handle_1.handleHttp)(res, 'ERROR_GET_getPostBySlugId', e);
            }
        });
    }
    newPost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { user } = req;
                if (!user)
                    return;
                const { id } = user;
                const response = yield (0, post_service_1.newPost)(req.body, id);
                res.status(200).send(response);
            }
            catch (e) {
                (0, error_handle_1.handleHttp)(res, 'ERROR_POST_POST', e);
            }
        });
    }
}
exports.PostController = PostController;
//# sourceMappingURL=post.controller.js.map