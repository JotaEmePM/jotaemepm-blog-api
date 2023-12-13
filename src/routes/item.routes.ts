import { Router } from 'express'
import { deleteItem, getItem, getItems, postItem, updateItem } from '../controllers/item.controller'
import { checkJwt } from '../middleware/session.middleware'

const routes = Router()

routes.use(checkJwt)

routes.get('/', getItems)
routes.get('/:id', getItem)

routes.post('/', postItem)

routes.put('/:id', updateItem)

routes.delete('/:id', deleteItem)

export { routes }