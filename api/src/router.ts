import { Router, Request, Response } from 'express'
import {prisma} from './database/index'

const mainRouter: Router = Router();

//Voilà, notre première route !
mainRouter.get('/', (_: Request, res: Response) => {
    res.json('Hello CPROM');
})

mainRouter.get('/posts', async (_: Request, res: Response) => {
    const posts = await prisma.post.findMany();
    res.send(posts);
})

export default mainRouter