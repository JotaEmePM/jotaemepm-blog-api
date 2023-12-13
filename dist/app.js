"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes/routes"));
const mongo_1 = __importDefault(require("./config/mongo"));
const morgan_1 = __importDefault(require("morgan"));
//import { logMiddleware } from './middleware/log.middleware'
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = Number(process.env.PORT) | 3030;
        this.config();
    }
    config() {
        this.app.set('port', this.port);
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        //this.app.use(logMiddleware)
        this.app.use((0, morgan_1.default)('tiny'));
        (0, mongo_1.default)().then(() => {
            // eslint-disable-next-line no-console
            console.log('MongoDB Connection OK');
        });
        (0, routes_1.default)(this.app);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            // eslint-disable-next-line no-console
            console.log(`App listening on port ${this.port}`);
        });
    }
}
const server = new Server();
server.start();
