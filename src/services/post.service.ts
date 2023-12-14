import { PostModel } from '../models/post.model'
import { Post } from '../interfaces/post.interface'

export const newPost = async (post: Post) => {
    const response = await PostModel.create(post)
    return response
}

export const getPosts = async() =>  {
    const response = await PostModel.find({})
    return response
}

export const getPost = async (slug: string) => {
    const response = await PostModel.find({ slug })
    return response
}