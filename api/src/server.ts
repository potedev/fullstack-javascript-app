import express from 'express'
import mainRouter from './router'

import { APP_BASE_URL } from './constants';

export const createServer = async () => {
    //Initialization de notre server Express
    const server: express.Application = express();

    //Notre serveur parsera les requête entrante en Json
    server.use(express.json())

    //On rajoute le router à notre server
    //Il sera accessible sur la route APP_BASE_URL, ici -> /api/v1/
    server.use(APP_BASE_URL, mainRouter)

    return server
}
