"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserChangePasswordModel = void 0;
const mongoose_1 = require("mongoose");
const UserChangePasswordSchema = new mongoose_1.Schema({
    userId: {
        type: String,
        required: true
    },
    oldPasswordHash: {
        type: String,
        required: true
    },
    oldSalt: {
        type: String,
        required: true
    },
    confirmationCode: {
        type: String,
        required: true
    },
    confirmed: {
        type: Boolean,
        required: false
    },
    requestConfirmationDate: {
        type: Date,
        required: true
    },
    confirmationDate: {
        type: Date,
        required: false
    },
    newPasswordHash: {
        type: String,
        required: false
    },
    newSalt: {
        type: String,
        required: false
    }
});
exports.UserChangePasswordModel = (0, mongoose_1.model)('passwordHistory', UserChangePasswordSchema);
//# sourceMappingURL=userChangePassword.model.js.map