import { createServer } from './server';
import { PORT } from './constants'

const main = async () => {
    const server = await createServer();

    server.listen(PORT, () => {
        console.log(`Server is now running on port ${PORT}`)
    })
}

main();

