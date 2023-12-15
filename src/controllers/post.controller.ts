import { Request, Response } from 'express'
import { newPost, getPosts } from '../services/post.service'
import { handleHttp } from '../utils/error.handle'
import { RequestExt } from '../interfaces/RequestExt.interface'
import { JwtPayload } from 'jsonwebtoken'

export class PostController {
    constructor() { }

    public async getPosts(req: Request, res: Response): Promise<void> {
        try {
            const {page} = req.query
            
                const response = await getPosts(Number(page))
                res.status(200).send(response)            
        } catch (e) {
            handleHttp(res, 'ERROR_POST_GET', e)
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