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
exports.verifyToken = exports.generateToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
require("dotenv/config");
const JWT_SECRET = process.env.JWT_SECRET || '';
const generateToken = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const jwt = yield (0, jsonwebtoken_1.sign)({ id }, JWT_SECRET, {
        expiresIn: '2h'
    });
    return jwt;
});
exports.generateToken = generateToken;
const verifyToken = (jwt) => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, jsonwebtoken_1.verify)(jwt, JWT_SECRET);
});
exports.verifyToken = verifyToken;
//# sourceMappingURL=jwt.handle.js.map