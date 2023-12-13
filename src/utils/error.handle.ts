import { Response } from 'express'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handleHttp = (res: Response, error: string, errorRaw?: any) => {

    // eslint-disable-next-line no-console
    console.log(errorRaw)
    res.status(500)
    res.send({ error })
}

export { handleHttp }