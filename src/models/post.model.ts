import { Schema, model } from 'mongoose'
import { Post } from '../interfaces/post.interface'

const PostSchema = new Schema<Post>({
    title: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    user_id: {
        type: String,
        required: true
    },
    creationDate: {
        type: Date        
    },
    subtitle: {
        type: String,
        default: ''        
    },
    img: {
        type: String,
        default: ''        
    },
    content: {
        type: String
    },
    tags: {
        type: [String]
    },
    visible: {
        type: Boolean,
        default: true
    }
    

}, {
    timestamps: true,
    versionKey: false
})

export const PostModel = model('post', PostSchema)