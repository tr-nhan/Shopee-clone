import express, {Request, Response} from "express";

class SitesController {
    public homepage(req: Request, res: Response) {
        return res.status(200).render("index");
    }

    public search(req: Request, res: Response) {

    }

    public invalidRequest(req: Request, res: Response) {
        res.status(404).render("error");
    }
}

export default new SitesController();