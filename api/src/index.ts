import { createServer } from './server';
import { PORT } from './constants'

import {prisma} from './database/index'

const main = async () => {
    const server = await createServer();

    const posts = await prisma.post.findMany();
    console.log(posts);

    server.listen(PORT, () => {
        console.log(`Server is now running on port ${PORT}`)
    })
}

main();

