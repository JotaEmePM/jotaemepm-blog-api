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
const newpost_dto_1 = require("../dto/request/newpost.dto");
const newPost = (post, userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resultValidation = yield (0, newpost_dto_1.validateNewPost)(post);
        if (!resultValidation.success)
            throw new Error('Error newPost Validation ' + JSON.stringify(resultValidation.error.errors));
        const tags = post.tags.map(tag => {
            return (0, slugify_handle_1.handleSlugifyString)(tag);
        });
        const dataModel = {
            slug: yield sluggyPost(post.title),
            title: post.title,
            user_id: userId,
            subtitle: post.subtitle,
            img: post.img,
            content: post.content,
            tags: [...tags],
            visible: post.visible && true,
            creationDate: new Date()
        };
        const response = yield post_model_1.post.create(dataModel);
        return response;
    }
    catch (err) {
        throw new Error('Error newPost Service ' + err);
    }
});
exports.newPost = newPost;
const getPosts = (page = 1, search = '') => __awaiter(void 0, void 0, void 0, function* () {
    // const response =
    //   await PostModel.find({
    //     visible: true
    //   })
    //   .sort({ 'creationDate': -1 })
    //   .limit(10)
    //select: "title date author",
    const options = {
        query: {
            visible: true,
            // $or: [
            // {title: { $regex: '.*' + search + '.*' },
            // content: { $regex: '.*' + search + '.*' }
            // }]
            $or: [
                {
                    title: { $regex: '.*' + search + '.*', $options: 'i' }
                },
                {
                    content: { $regex: '.*' + search + '.*', $options: 'i' }
                },
                {
                    tags: { $regex: '.*' + search + '.*', $options: 'i' }
                }
            ]
        },
        sort: { creationDate: -1 },
        limit: 10,
        page: page
    };
    const response = yield post_model_1.post.paginate(options);
    return response;
});
exports.getPosts = getPosts;
const getPost = (slug) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield post_model_1.post.find({ slug });
    return response;
});
exports.getPost = getPost;
const sluggyPost = (text) => __awaiter(void 0, void 0, void 0, function* () {
    let iteration = 0;
    let slugExist = true;
    let slug = '';
    do {
        if (iteration == 0)
            slug = `${(0, slugify_handle_1.handleSlugifyString)(text)}`;
        else
            slug = `${(0, slugify_handle_1.handleSlugifyString)(text)}-${iteration}`;
        const existSlug = yield post_model_1.post.findOne({ slug });
        if (!existSlug)
            slugExist = false;
        else
            iteration += 1;
    } while (slugExist);
    return slug;
});
//# sourceMappingURL=post.service.js.map