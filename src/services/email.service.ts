import { EmailData } from '../dto/request/email-data.dto'
import { LogEmailModel } from '../models/log.email.model'
import { formatTemplate, readEmailTemplate, sendEmail } from '../utils/email.handle'

enum EMAIL_OPERATIONS {
    Welcome = 'WELCOME'
}

export const sendWelcomeEmail = async (to: string, subject: string, name: string, activation_code: string) =>
{
    const activation_url: string = process.env.EMAIL_ACTIVATION_URL || ''
    const email_from: string = process.env.EMAIL_FROM || ''
    const verification_url = `${activation_url}?code=${activation_code}`

    const email_data = [
        {
            key: 'URL_VERIFICATION_CODE',
            value: verification_url
        },
        {
            key: 'USER_NAME',
            value: name
        }
    ]

    const email_content = await formatTemplate(await readEmailTemplate('welcome'),email_data as EmailData[])
    
    const response = await sendEmail(to, subject, email_content)
    LogEmail(response.data?.id || '', EMAIL_OPERATIONS.Welcome, email_from, to, subject, email_content)
}


const LogEmail = async (email_id: string, reason: string, from: string, to: string, subject: string, content:string ) => {
    await LogEmailModel.create({
      email_id, reason, to, subject, content, from
    })
}



