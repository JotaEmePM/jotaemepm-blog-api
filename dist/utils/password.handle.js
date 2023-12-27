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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.encryptWithHash = exports.encryptWithHash_pbkdf2 = exports.encrypt_pbkdf2 = exports.encrypt = void 0;
const bcryptjs_1 = require("bcryptjs");
const crypto_1 = __importDefault(require("crypto"));
const encrypt = (pass) => __awaiter(void 0, void 0, void 0, function* () {
    const salt = yield (0, bcryptjs_1.genSaltSync)(10);
    const passwordHash = yield (0, bcryptjs_1.hash)(pass, salt);
    return [passwordHash, salt];
});
exports.encrypt = encrypt;
const encrypt_pbkdf2 = (pass) => __awaiter(void 0, void 0, void 0, function* () {
    const salt = yield (0, bcryptjs_1.genSaltSync)(10);
    const derivedKey = yield crypto_1.default.pbkdf2Sync(pass, salt, 100000, 64, 'sha512');
    const hash = derivedKey.toString('hex');
    return [hash, salt];
});
exports.encrypt_pbkdf2 = encrypt_pbkdf2;
const encryptWithHash_pbkdf2 = (pass, salt) => __awaiter(void 0, void 0, void 0, function* () {
    const derivedKey = crypto_1.default.pbkdf2Sync(pass, salt, 100000, 64, 'sha512');
    return derivedKey.toString('hex');
});
exports.encryptWithHash_pbkdf2 = encryptWithHash_pbkdf2;
const encryptWithHash = (pass, salt) => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, bcryptjs_1.hash)(pass, salt);
});
exports.encryptWithHash = encryptWithHash;
//# sourceMappingURL=password.handle.js.map