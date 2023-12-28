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
exports.login = exports.register = void 0;
const email_service_1 = require("../services/email.service");
const auth_service_1 = require("../services/auth.service");
const error_handle_1 = require("../utils/error.handle");
const register = ({ body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [createdUser, verification_code] = yield (0, auth_service_1.registerNewUser)(body);
        if (verification_code === 'ALREADY_USER')
            res.status(201).send('USER ALREADY EXIST');
        const { name, email } = body;
        (0, email_service_1.sendWelcomeEmail)(email, name, 'Bienvenido a JotaEmePM.dev', verification_code);
        res.send(createdUser);
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_REGISTER', e);
    }
});
exports.register = register;
const login = ({ body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = body;
        const response = yield (0, auth_service_1.loginUser)(email, password);
        if (response === 'PASSWORD_INCORRECT')
            res.status(403);
        res.set('jwtToken', response);
        res.send(response);
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_REGISTER', e);
    }
});
exports.login = login;
// export const requestChangePassword = async({ body }: Request, res: Response) => {
//     try {
//         const { email } = body
//         const response = await loginUser(email)
//         if (response === 'PASSWORD_INCORRECT')
//             res.status(403)
//         res.set('jwtToken', response)
//         res.send(response)
//     } catch (e) {
//         handleHttp(res, 'ERROR_REGISTER', e)
//     }
// }
// export const changePassword = async (_req: Request, res: Response)=> {
//     res.status(200)
// }
//# sourceMappingURL=auth.controller.js.map