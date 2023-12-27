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
exports.loginUser = exports.registerNewUser = void 0;
const jwt_handle_1 = require("../utils/jwt.handle");
const password_handle_1 = require("../utils/password.handle");
const user_model_1 = require("./../models/user.model");
const registerNewUser = ({ email, password, name }) => __awaiter(void 0, void 0, void 0, function* () {
    const checkIs = yield user_model_1.UserModel.findOne({ email });
    if (checkIs)
        return 'ALREADY_USER';
    const [passwordHash, salt] = yield (0, password_handle_1.encrypt_pbkdf2)(password);
    const registerNewUser = yield user_model_1.UserModel.create({
        password: passwordHash,
        email, name, salt
    });
    return registerNewUser;
});
exports.registerNewUser = registerNewUser;
const loginUser = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    const userDB = yield user_model_1.UserModel.findOne({ email });
    if (!userDB)
        return 'USER_!EXIST';
    const hashedPassword = yield (0, password_handle_1.encryptWithHash_pbkdf2)(password, userDB.salt);
    const resultLogin = (hashedPassword === userDB.password) ? 'LOGIN_OK' : 'PASSWORD_INCORRECT';
    if (resultLogin === 'PASSWORD_INCORRECT')
        return resultLogin;
    if (resultLogin === 'LOGIN_OK')
        return (0, jwt_handle_1.generateToken)(userDB.email);
});
exports.loginUser = loginUser;
//# sourceMappingURL=auth.service.js.map