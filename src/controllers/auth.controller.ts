
import { sendWelcomeEmail } from '../services/email.service'
import { registerNewUser, loginUser } from '../services/auth.service'
import { handleHttp } from '../utils/error.handle'
import { Request, Response } from 'express'

export const register = async ({ body }: Request, res: Response) => {
    try {
        const [createdUser, verification_code] = await registerNewUser(body)
        
        if(verification_code === 'ALREADY_USER') res.status(201).send('USER ALREADY EXIST')
        
        const {name , email} = body
        sendWelcomeEmail(email, name, 'Bienvenido a JotaEmePM.dev',verification_code)
        
        res.send(createdUser)
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

        res.set('jwtToken', response)
        res.send(response)
    } catch (e) {
        handleHttp(res, 'ERROR_REGISTER', e)
    }
}

// export const requestChangePassword = async({ body }: Request, res: Response) => {
//     try {
//         const { email } = body
//         const response = await loginUser(email)

//         if (response === 'PASSWORD_INCORRECT')
//             res.status(403)

//         res.set('jwtToken', response)
//         res.send(response)
//     } catch (e) {
//         handleHttp(res, 'ERROR_REGISTER', e)
//     }
// }

// export const changePassword = async (_req: Request, res: Response)=> {
//     res.status(200)
// }