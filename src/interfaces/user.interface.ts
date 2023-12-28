import { Auth } from './auth.interface'

export interface User extends Auth {
    verificated: boolean
    verification_code: string
}