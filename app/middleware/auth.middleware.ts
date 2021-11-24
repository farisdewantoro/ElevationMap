import { Router, Request, Response } from 'express';

const ensureAuthenticated = (req: Request, res: Response, next: any) => {
    if (req.isAuthenticated()) {
        return next();
    } else {
        req.logout();
        return res.status(400).json({ error: true, isAuthenticated: false, message: "YOU ARE NOT AUTHENTICATED" });
    }

}

export {
    ensureAuthenticated
}