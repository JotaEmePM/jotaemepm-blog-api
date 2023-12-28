import crypto from 'crypto'

export const generateGUID = () => {
    return crypto.randomBytes(16).toString('hex')
    
}