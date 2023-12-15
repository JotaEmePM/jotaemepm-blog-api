"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.post = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const mongoose_paginate_ts_1 = require("mongoose-paginate-ts");
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
PostSchema.plugin(mongoose_paginate_ts_1.mongoosePagination);
exports.post = mongoose_1.default.model('post', PostSchema);
//export const PostModel = model('post', PostSchema, 'blog')
//# sourceMappingURL=post.model.js.map