import { Router } from 'express'
import { PostController } from '../controllers/post.controller'
import { checkJwt } from '../middleware/session.middleware'

const routes = Router()

const controller = new PostController()

routes.get('/', controller.getPosts)
routes.get('/:slug', controller.getPostBySlugId)
routes.post('/', checkJwt, controller.newPost)
//controller.newPost

//routes.put('/:slug', editPost),
//routes.put('/:slug/disable', disablePost)

export { routes }
