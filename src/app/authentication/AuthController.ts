import {Request, Response} from "express";

export default class AuthController {
    public constructor() {
        
    }

    public registry(req: Request, res: Response) {
        return res.status(200).render("index");
    }
}