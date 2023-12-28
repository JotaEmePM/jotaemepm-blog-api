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
exports.readEmailTemplate = exports.formatTemplate = exports.sendEmail = void 0;
const resend_1 = require("resend");
const fs_1 = require("fs");
const from_email = process.env.EMAIL_FROM || '';
const resend = new resend_1.Resend(process.env.RESEND_APIKEY);
// TODO: Buscar la forma de implementar templates.
const sendEmail = (to, subject, html) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield resend.emails.send({
        to,
        subject,
        from: from_email,
        html
    });
    return result;
});
exports.sendEmail = sendEmail;
const formatTemplate = (template, data) => __awaiter(void 0, void 0, void 0, function* () {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data.forEach((item) => {
        template = template.replace(`***${item.key}***`, item.value);
    });
    return template;
});
exports.formatTemplate = formatTemplate;
const readEmailTemplate = (template_name) => __awaiter(void 0, void 0, void 0, function* () {
    const file = (0, fs_1.readFileSync)(`./src/email_templates/${template_name}.html`, 'utf-8');
    return file;
});
exports.readEmailTemplate = readEmailTemplate;
//# sourceMappingURL=email.handle.js.map