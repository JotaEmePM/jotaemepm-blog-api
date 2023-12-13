"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logMiddleware = void 0;
const logMiddleware = (_req, _res, next) => {
    // eslint-disable-next-line no-console
    console.log('Hola soy el Log');
    next();
};
exports.logMiddleware = logMiddleware;
