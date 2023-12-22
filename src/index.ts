import cors from 'cors'
import 'dotenv/config'
import express from 'express'
import routes from './routes/routes'
import db from './config/mongo'
import morgan from 'morgan'
//import { logMiddleware } from './middleware/log.middleware'


class Server {
    public app: express.Application
    public port: number

    constructor() {
        this.app = express()
        this.port = Number(process.env.PORT) | 3030
        this.config()
    }

    public config(): void {
        this.app.set('port', this.port)
        this.app.use(cors())
        this.app.use(express.json())

        //this.app.use(logMiddleware)
        this.app.use(morgan('tiny'))

        db().then(() => {
            // eslint-disable-next-line no-console
            console.log('MongoDB Connection OK')
        })

        routes(this.app)
    }
    

    public start(): void {
        this.app.listen(this.app.get('port'), () => {
            // eslint-disable-next-line no-console
            console.log(`App listening on port ${this.port}`)
        })
    }
}

const server = new Server()
server.start()