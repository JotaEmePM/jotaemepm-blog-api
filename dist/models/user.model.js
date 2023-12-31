"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        default: ''
    },
    salt: {
        type: String,
        default: '',
        required: true
    },
    verificated: {
        type: Boolean,
        default: false,
        required: true
    },
    verification_code: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    versionKey: false
});
exports.UserModel = (0, mongoose_1.model)('auth', UserSchema);
//# sourceMappingURL=user.model.js.map