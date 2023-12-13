import { Request, Response, NextFunction } from 'express'
import { verifyToken } from '../utils/jwt.handle'
import { JwtPayload } from 'jsonwebtoken'

export interface RequestExt extends Request {
    user?: string | JwtPayload
}

export const checkJwt = async (req: RequestExt, res: Response, next: NextFunction) => {
    try {
        const jwtByUser = req.headers.authorization || ''

        const jwt = jwtByUser.split(' ').pop()
        const resultJwt = await verifyToken(`${jwt}`)

        if (!resultJwt) {
            res.status(401)
            res.send('INVALID_SESSION_TOKEN')
        }
        req.user = resultJwt

        next()
    } catch (e) {
        res.status(400)
        res.send('SESSION_INVALID')
    }
}