import { Schema, model } from 'mongoose'
import { LogEmail } from '../interfaces/logemail.interface'

const LogEmailSchema = new Schema<LogEmail>({
    email_id: {
        type: String,
        required: true
    },
    reason: {
        type: String,
        required: true
    },
    from: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }    
}, {
    timestamps: true,
    versionKey: false
})

export const LogEmailModel = model('logemail', LogEmailSchema)