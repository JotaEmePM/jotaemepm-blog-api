import { sign, verify } from 'jsonwebtoken'
import 'dotenv/config'

const JWT_SECRET = process.env.JWT_SECRET || ''

export const generateToken = async (id: string) => {
    const jwt = await sign({ id }, JWT_SECRET, {
        expiresIn: '2h'
    })

    return jwt
}

export const verifyToken = async (jwt: string) => {
    return await verify(jwt, JWT_SECRET)
}