import express, { Router, Request, Response } from 'express';

const router: Router = express.Router();


router.post('/products', (req: Request, res: Response) => {
    // TODO: ADD LOGIC FOR ROUTE
    res.send("route reached");
});

router.get('/products', (req: Request, res: Response) => {
    // TODO: ADD LOGIC FOR ROUTE
    res.send("route reached");
});

router.put('/products/:id', (req: Request, res: Response) => {
    // TODO: ADD LOGIC FOR ROUTE
    res.send("route reached");
});

router.delete('/products/:id', (req: Request, res: Response) => {
    // TODO: ADD LOGIC FOR ROUTE
    res.send("route reached");
});

export default router;