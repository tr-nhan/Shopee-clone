import {Request, Response} from "express";

class SitesController {
    public homepage(req: Request, res: Response) {
        return res.status(200).render("index", {pages: "components/header"});
    }

    public search(req: Request, res: Response) {
        return res.status(200).render("index", {pages: "components/searchform"});
    }

    public invalidRequest(req: Request, res: Response) {
        return res.status(404).render("error");
    }
}

export default new SitesController();