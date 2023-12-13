import express, { Router } from 'express'
import { BaseController } from '../controllers'

export class BaseRoutes {
    public router: Router

    // remplace my controller for your controller
    private controller: BaseController = new BaseController()

    constructor() {
        this.router = express.Router()
        this.registerRoutes()
    }

    // remplace my example routes and controller methods for your own 
    protected registerRoutes(): void {
        this.router.get('/', this.controller.getBase)
        this.router.get('/ping', this.controller.getPing)
    }
}