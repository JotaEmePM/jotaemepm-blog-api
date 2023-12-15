import { PostModel } from '../models/post.model'
import { Post } from '../interfaces/post.interface'


export const newPost = async (post: Post, userId: string) => {

    const dataModel: Post = {
        slug: 'aaa-aaa',
        title: post.title,
        user_id: userId,
        subtitle: '',
        img: '',
        content: post.content,
        tags: [...post.tags],
        visible: post.visible && true,
        creationDate: new Date()
    }

    const response = await PostModel.create(dataModel)
    return response
}

export const getPosts = async () => {
    const response = await PostModel.find({})
    return response
}

export const getPost = async (slug: string) => {
    const response = await PostModel.find({ slug })
    return response
}