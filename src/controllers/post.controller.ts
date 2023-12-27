import { Request, Response } from 'express'
import { newPost, getPosts, getPost } from '../services/post.service'
import { handleHttp } from '../utils/error.handle'
import { RequestExt } from '../interfaces/RequestExt.interface'
import { JwtPayload } from 'jsonwebtoken'

interface RequestQueryPost {
    search: string,
    page: number
}

interface RequestQueryGetPostBySlug {
    slug: string
}
export class PostController {
    constructor() { }

    public async getPosts(req: Request, res: Response): Promise<void> {
        try {
            
            const { search, page} = req.query as unknown as RequestQueryPost
            
                const response = await getPosts(page, search)
                res.status(200).send(response)            
        } catch (e) {
            handleHttp(res, 'ERROR_POST_GET', e)
        }
    }

    public async getPostBySlugId(req: Request, res: Response): Promise<void> {
        try {
            console.log('getpostbyslug')
            const { slug } = req.params as unknown as RequestQueryGetPostBySlug
            console.log(slug)
            const slugStr: string = (slug !== null) ? slug?.toString(): ''
            console.log(slugStr)
            const response = await getPost(slugStr)

            res.status(200).send(response)
        } catch (e) {
            handleHttp(res, 'ERROR_GET_getPostBySlugId', e)
        }
    }

    public async newPost(req: RequestExt, res: Response): Promise<void> {
        try {
            const { user } = req

            if (!user)
                return

            const { id } = user as JwtPayload
            
            const response = await newPost(req.body, id)
            res.status(200).send(response)
        } catch (e) {
            handleHttp(res, 'ERROR_POST_POST', e)
        }
    }
}