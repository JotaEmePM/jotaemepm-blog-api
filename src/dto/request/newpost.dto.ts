// import Joi, { ValidationResult } from 'joi'
import { z } from 'zod'

export interface newPostDTO {
    title: string
    subtitle: string
    content: string
    tags: string[],
    img: string,
    visible: boolean
}

export const validateNewPost = async (input: newPostDTO) => {
    const schema = z.object({
        title: z.string({
            required_error: 'Titulo es requerido',
            invalid_type_error: 'Titulo debe ser de tipo texto'
        }).min(3).max(200),
        subtitle: z.string()
            .min(0).max(100).optional(),
        content: z.string()
            .min(3).max(10000),
        tags: z.array(z.string()),
        img: z.string().min(0).optional(),
        visible: z.boolean()
    }).required({
        title: true,        
        content: true,
        visible: true
    })

    return await schema.safeParseAsync(input)
}

// export const validateNewPost = async (input: newPostDTO): Promise<ValidationResult> => {
//     const newPostSchemaValidator = Joi.object({
//         title: Joi.string()        
//             .min(3)
//             .max(200)
//             .required(),
//         subtitle: Joi.string()        
//             .min(0).max(100),
//         content: Joi.string()
            
//             .min(0).max(3000),
//         tags: Joi.string()
//             .min(3),
//         img: Joi.string()
//             .min(0),
//         visible: Joi.boolean()
//             .required()        
//     })

//     return await newPostSchemaValidator.validate(input)
// }

