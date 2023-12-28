import { model, Schema } from 'mongoose'
import { UserChangePassword } from '../interfaces/userChangePassword.interface'

const UserChangePasswordSchema = new Schema<UserChangePassword> ({
    userId: {
        type: String,
        required: true
    },
    oldPasswordHash: {
        type: String,
        required: true
    },
    oldSalt: {
        type: String,
        required: true
    },
    confirmationCode: {
        type: String,
        required: true
    },
    confirmed: {
        type: Boolean,
        required: false
    },
    requestConfirmationDate: {
        type: Date,
        required: true
    },
    confirmationDate: {
        type: Date,
        required: false
    },
    newPasswordHash: {
        type: String,
        required: false
    },
    newSalt: {
        type: String,
        required: false
    }
})

export const UserChangePasswordModel = model('passwordHistory', UserChangePasswordSchema)