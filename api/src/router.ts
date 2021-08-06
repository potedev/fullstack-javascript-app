import { Router, Request, Response } from 'express'

const mainRouter: Router = Router();

//Voilà, notre première route !
mainRouter.get('/', (_: Request, res: Response) => {
    res.json('Hello CPROM');
})

export default mainRouter