import { hash, compare, genSaltSync } from 'bcryptjs'

export const encrypt = async (pass: string,): Promise<[string, string]> => {
    const salt = await genSaltSync(10)
    const passwordHash = await hash(pass, salt)
    return [passwordHash, salt]
}

export const encryptWithHash = async (pass: string, salt: string): Promise<string> => {
    return await hash(pass, salt)
}