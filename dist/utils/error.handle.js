"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleHttp = void 0;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handleHttp = (res, error, errorRaw) => {
    // eslint-disable-next-line no-console
    console.log(errorRaw);
    res.status(500);
    res.send({ error });
};
exports.handleHttp = handleHttp;
