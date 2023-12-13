import { Request, Response } from 'express'
import { handleHttp } from '../utils/error.handle'
import { deleteCar, getCar, getCars, insertCar, updateCar } from '../services/car.service'
import { RequestExt } from '../middleware/session.middleware'

const getItem = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params
        const response = await getCar(id)
        const data = response ? response : 'NOT_FOUND'
        res.status(200).send(data)
    } catch (_e) {
        handleHttp(res, 'ERROR_GET_ITEM')
    }
}

const getItems = async (req: RequestExt, res: Response) => {
    try {
        const response = await getCars()
        res.status(200).send({
            data: response,
            user: req.user
        })
    } catch (_e) {
        handleHttp(res, 'ERROR_GET_ITEMS')
    }
}

const updateItem = async ({ params, body }: Request, res: Response) => {
    try {
        const { id } = params
        const response = await updateCar(id, body)
        res.send(response)
    } catch (_e) {
        handleHttp(res, 'ERROR_UPDATE_ITEM')
    }
}

const postItem = async ({ body }: Request, res: Response) => {
    try {
        const responseItem = await insertCar(body)
        res.status(200).send(responseItem)
    } catch (e) {
        handleHttp(res, 'ERROR_POST_ITEM', e)
    }
}

const deleteItem = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params
        const responseItem = await deleteCar(id)
        res.send(responseItem)
    } catch (_e) {
        handleHttp(res, 'ERROR_DELETE_ITEM')
    }
}

export { getItem, getItems, updateItem, postItem, deleteItem }
