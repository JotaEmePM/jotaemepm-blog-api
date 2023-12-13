import { NextFunction, Request, Response } from 'express'

export const logMiddleware = (_req: Request, _res: Response, next: NextFunction) => {
    // eslint-disable-next-line no-console
    console.log('Hola soy el Log')
    next()
}

