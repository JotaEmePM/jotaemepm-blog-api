import express from 'express'
import { BaseRoutes } from './base.routes'
//import { routes as itemRouter } from './item.routes'
import { routes as authRouter } from './auth.routes'
import { routes as postRouter } from './post.routes'

const routes = (server: express.Application): void => {
    server.use('/', new BaseRoutes().router)


    //server.use('/item', itemRouter)
    server.use('/auth', authRouter)
    server.use('/post', postRouter)

}


export default routes