import { User } from '../interfaces/user.interface'
import { generateGUID } from '../utils/guid.handle'
import { generateToken } from '../utils/jwt.handle'
import { encryptWithHash_pbkdf2, encrypt_pbkdf2 } from '../utils/password.handle'
import { UserModel } from './../models/user.model'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const registerNewUser = async ({ email, password, name }: User): Promise<[any, string]> => {
    const checkIs = await UserModel.findOne({ email })
    if (checkIs) return [null, 'ALREADY_USER']
    
    const [passwordHash, salt] = await encrypt_pbkdf2(password)    

    const verification_code = generateGUID()

    const registerNewUser = await UserModel.create({
        password: passwordHash,
        email, name, salt, verification_code, 
        verificated: false
    })
    return [registerNewUser, verification_code]
}

export const loginUser = async (email: string, password: string) => {
    const userDB = await UserModel.findOne({ email })
    if (!userDB) return 'USER_!EXIST'

    const hashedPassword = await encryptWithHash_pbkdf2(password, userDB.salt)
    const resultLogin = (hashedPassword === userDB.password) ? 'LOGIN_OK' : 'PASSWORD_INCORRECT'

    if (resultLogin === 'PASSWORD_INCORRECT') return resultLogin

    if (resultLogin === 'LOGIN_OK')
        return generateToken(userDB.email)
}

export const requestPasswordChange = (_email: string) => {

}