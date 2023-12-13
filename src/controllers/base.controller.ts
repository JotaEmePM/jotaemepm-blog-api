import { Request, Response } from 'express'

export class BaseController {
    constructor() { }

    public async getBase(_req: Request, res: Response): Promise<void> {
        res.json('hello world')
    }

    public async getPing(_req: Request, res: Response): Promise<void> {
        res.json('pong 🏓')
    }
}