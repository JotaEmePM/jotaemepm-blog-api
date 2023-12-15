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
const slugify_handle_1 = require("../utils/slugify.handle");
const newPost = (post, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const tags = post.tags.split(',').map((tag) => {
        return (0, slugify_handle_1.handleSlugifyString)(tag);
    });
    const dataModel = {
        slug: yield sluggyPost(post.title),
        title: post.title,
        user_id: userId,
        subtitle: '',
        img: '',
        content: post.content,
        tags: [...tags],
        visible: post.visible && true,
        creationDate: new Date()
    };
    const response = yield post_model_1.PostModel.create(dataModel);
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
const sluggyPost = (text) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    let iteration = 0;
    let slugExist = true;
    let slug = '';
    do {
        slug = `${(0, slugify_handle_1.handleSlugifyString)(text)}${(_a = iteration > 0) !== null && _a !== void 0 ? _a : `-${iteration}`}`;
        const existSlug = yield post_model_1.PostModel.findOne({ slug });
        if (existSlug)
            slugExist = false;
        else
            iteration += 1;
        console.log(`iteration-slug: ${slug} `);
    } while (slugExist);
    return slug;
});
//# sourceMappingURL=post.service.js.map