import { registerNewUser, loginUser } from '../services/auth.service'
import { handleHttp } from '../utils/error.handle'
import { Request, Response } from 'express'

export const register = async ({ body }: Request, res: Response) => {
    try {
        const response = await registerNewUser(body)
        res.send(response)
    } catch (e) {
        handleHttp(res, 'ERROR_REGISTER', e)
    }
}

export const login = async ({ body }: Request, res: Response) => {
    try {
        const { email, password } = body
        const response = await loginUser(email, password)

        if (response === 'PASSWORD_INCORRECT')
            res.status(403)

        res.send(response)
    } catch (e) {
        handleHttp(res, 'ERROR_REGISTER', e)
    }
}