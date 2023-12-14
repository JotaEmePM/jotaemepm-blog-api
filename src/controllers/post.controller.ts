import { Request, Response } from 'express'
import { newPost, getPosts } from '../services/post.service'
import { handleHttp } from '../utils/error.handle'

export class PostController {
    constructor() {}

    public async getPosts(_req: Request, res: Response): Promise<void> {
        try {
        const response = await getPosts()
        res.status(200).send(response)
    } catch (e) {
        handleHttp(res, 'ERROR_POST_ITEM', e)
    }
    }

    public async newPost({body}: Request, res: Response): Promise<void> {
        try {
            //const { title, slug, user_id} = body
            const response = await newPost(body)
            res.status(200).send(response)
        } catch (e) {
            handleHttp(res, 'ERROR_POST_ITEM', e)
        }
    }
}