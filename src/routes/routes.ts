import express from 'express'
import { BaseRoutes } from './base.routes'
import { routes as itemRouter } from './item.routes'
import { routes as authRouter } from './auth.routes'

const routes = (server: express.Application): void => {
    server.use('/', new BaseRoutes().router)


    server.use('/item', itemRouter)
    server.use('/auth', authRouter)

}


export default routes