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
exports.getPost = exports.getPosts = exports.newPost = void 0;
const post_model_1 = require("../models/post.model");
const newPost = (post) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield post_model_1.PostModel.create(post);
    return response;
});
exports.newPost = newPost;
const getPosts = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield post_model_1.PostModel.find({});
    return response;
});
exports.getPosts = getPosts;
const getPost = (slug) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield post_model_1.PostModel.find({ slug });
    return response;
});
exports.getPost = getPost;
//# sourceMappingURL=post.service.js.map