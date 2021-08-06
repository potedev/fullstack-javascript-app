import express from 'express'

export const createServer = async () => {
    //Initialization de notre server Express
    const server: express.Application = express();

    //Notre serveur parsera les requête entrante en Json
    server.use(express.json())

    return server
}