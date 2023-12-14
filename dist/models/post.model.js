"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostModel = void 0;
const mongoose_1 = require("mongoose");
const PostSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    user_id: {
        type: String,
        required: true
    },
    creationDate: {
        type: Date
    },
    subtitle: {
        type: String,
        default: ''
    },
    img: {
        type: String,
        default: ''
    },
    content: {
        type: String
    },
    tags: {
        type: [String]
    },
    visible: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true,
    versionKey: false
});
exports.PostModel = (0, mongoose_1.model)('post', PostSchema);
//# sourceMappingURL=post.model.js.map