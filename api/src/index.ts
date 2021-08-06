import dotenv from 'dotenv'
import path from 'path'

import { createServer } from './server';

//Le fichier .env que nous utiliserons ici se trouve à la racine de notre mono repo
const envPath = path.join(__dirname, '../..');
dotenv.config({ path: envPath + '/.env' })

const main = async () => {
    const server = await createServer();

    server.listen(process.env.PORT, () => {
        console.log(`Server is now running on port ${process.env.PORT}`)
    })
}

main();

