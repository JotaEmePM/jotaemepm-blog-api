import { User } from '../interfaces/user.interface'
import { generateToken } from '../utils/jwt.handle'
import { encrypt, encryptWithHash } from '../utils/password.handle'
import { UserModel } from './../models/user.model'

export const registerNewUser = async ({ email, password, name }: User) => {
    const checkIs = await UserModel.findOne({ email })
    if (checkIs) return 'ALREADY_USER'

    const [passwordHash, salt] = await encrypt(password)
    const registerNewUser = await UserModel.create({
        password: passwordHash,
        email, name, salt
    })
    return registerNewUser
}

export const loginUser = async (email: string, password: string) => {
    const userDB = await UserModel.findOne({ email })
    if (!userDB) return 'USER_!EXIST'

    const hashedPassword = await encryptWithHash(password, userDB.salt)
    const resultLogin = (hashedPassword === userDB.password) ? 'LOGIN_OK' : 'PASSWORD_INCORRECT'

    if (resultLogin === 'PASSWORD_INCORRECT') return resultLogin

    if (resultLogin === 'LOGIN_OK')
        return generateToken(userDB.email)
}