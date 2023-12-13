import { Router } from 'express'
import { login, register } from '../controllers/auth.controller'

const routes = Router()

routes.post('/register', register)
routes.post('/login', login)

export { routes }