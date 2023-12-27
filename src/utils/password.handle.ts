import { hash, genSaltSync } from 'bcryptjs'
import crypto from 'crypto'

export const encrypt = async (pass: string): Promise<[string, string]> => {
  const salt = await genSaltSync(10)
  const passwordHash = await hash(pass, salt)
  return [passwordHash, salt]
}

export const encrypt_pbkdf2 = async (
  pass: string
): Promise<[string | void, string]> => {
  const salt = await genSaltSync(10)
  const derivedKey = await crypto.pbkdf2Sync(pass, salt, 100000, 64, 'sha512')
  const hash = derivedKey.toString('hex')
  return [hash, salt]
}

export const encryptWithHash_pbkdf2 = async (
  pass: string,
  salt: string
): Promise<string> => {
  const derivedKey = crypto.pbkdf2Sync(pass, salt, 100000, 64, 'sha512')
  return derivedKey.toString('hex')
}

export const encryptWithHash = async (
  pass: string,
  salt: string
): Promise<string> => {
  return await hash(pass, salt)
}
