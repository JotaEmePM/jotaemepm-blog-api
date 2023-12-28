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
exports.sendWelcomeEmail = void 0;
const log_email_model_1 = require("../models/log.email.model");
const email_handle_1 = require("../utils/email.handle");
var EMAIL_OPERATIONS;
(function (EMAIL_OPERATIONS) {
    EMAIL_OPERATIONS["Welcome"] = "WELCOME";
})(EMAIL_OPERATIONS || (EMAIL_OPERATIONS = {}));
const sendWelcomeEmail = (to, subject, name, activation_code) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const activation_url = process.env.EMAIL_ACTIVATION_URL || '';
    const email_from = process.env.EMAIL_FROM || '';
    const verification_url = `${activation_url}?code=${activation_code}`;
    const email_data = [
        {
            key: 'URL_VERIFICATION_CODE',
            value: verification_url
        },
        {
            key: 'USER_NAME',
            value: name
        }
    ];
    const email_content = yield (0, email_handle_1.formatTemplate)(yield (0, email_handle_1.readEmailTemplate)('welcome'), email_data);
    const response = yield (0, email_handle_1.sendEmail)(to, subject, email_content);
    LogEmail(((_a = response.data) === null || _a === void 0 ? void 0 : _a.id) || '', EMAIL_OPERATIONS.Welcome, email_from, to, subject, email_content);
});
exports.sendWelcomeEmail = sendWelcomeEmail;
const LogEmail = (email_id, reason, from, to, subject, content) => __awaiter(void 0, void 0, void 0, function* () {
    yield log_email_model_1.LogEmailModel.create({
        email_id, reason, to, subject, content, from
    });
});
//# sourceMappingURL=email.service.js.map