import { Resend } from 'resend'
import { readFileSync } from 'fs'
import { EmailData } from '../dto/request/email-data.dto'

const from_email: string = process.env.EMAIL_FROM || ''
const resend = new Resend(process.env.RESEND_APIKEY)



// TODO: Buscar la forma de implementar templates.
export const sendEmail = async (to: string, subject: string, html: string) => {
    const result = await resend.emails.send({
        to,
        subject,
        from: from_email,
        html
    })        
    return result
}

export const formatTemplate = async (template: string, data: EmailData[]) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data.forEach((item) => {
        template = template.replace(`***${item.key}***`, item.value)           
    })    
    return template
}

export const readEmailTemplate = async (template_name: string): Promise<string> =>  {
    const file = readFileSync(`./email_templates/${template_name}.html`, 'utf-8')
    return file
}