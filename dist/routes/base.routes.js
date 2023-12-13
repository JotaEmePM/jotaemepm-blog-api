"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRoutes = void 0;
const express_1 = __importDefault(require("express"));
const controllers_1 = require("../controllers");
class BaseRoutes {
    constructor() {
        // remplace my controller for your controller
        this.controller = new controllers_1.BaseController();
        this.router = express_1.default.Router();
        this.registerRoutes();
    }
    // remplace my example routes and controller methods for your own 
    registerRoutes() {
        this.router.get('/', this.controller.getBase);
        this.router.get('/ping', this.controller.getPing);
    }
}
exports.BaseRoutes = BaseRoutes;
