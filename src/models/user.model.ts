import { Schema, model } from 'mongoose'
import { User } from '../interfaces/user.interface'

const UserSchema = new Schema<User>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        default: ''
    },
    salt: {
        type: String,
        default: '',
        required: true
    },
    verificated: {
        type: Boolean,
        default: false,
        required: true
    },
    verification_code: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    versionKey: false
})

export const UserModel = model('auth', UserSchema)