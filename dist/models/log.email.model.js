"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogEmailModel = void 0;
const mongoose_1 = require("mongoose");
const LogEmailSchema = new mongoose_1.Schema({
    email_id: {
        type: String,
        required: true
    },
    reason: {
        type: String,
        required: true
    },
    from: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    versionKey: false
});
exports.LogEmailModel = (0, mongoose_1.model)('logemail', LogEmailSchema);
//# sourceMappingURL=log.email.model.js.map