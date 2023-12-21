"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateNewPost = void 0;
// import Joi, { ValidationResult } from 'joi'
const zod_1 = require("zod");
const validateNewPost = (input) => __awaiter(void 0, void 0, void 0, function* () {
    const schema = zod_1.z.object({
        title: zod_1.z.string({
            required_error: 'Titulo es requerido',
            invalid_type_error: 'Titulo debe ser de tipo texto'
        }).min(3).max(200),
        subtitle: zod_1.z.string()
            .min(0).max(100).optional(),
        content: zod_1.z.string()
            .min(3).max(10000),
        tags: zod_1.z.array(zod_1.z.string()),
        img: zod_1.z.string().min(0).optional(),
        visible: zod_1.z.boolean()
    }).required({
        title: true,
        content: true,
        visible: true
    });
    return yield schema.safeParseAsync(input);
});
exports.validateNewPost = validateNewPost;
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
//# sourceMappingURL=newpost.dto.js.map