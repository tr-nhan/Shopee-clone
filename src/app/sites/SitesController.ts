import express, {Request, Response} from "express";

class SitesController {

    public homepage(req: Request, res: Response) {
        return res.status(200).render("index");
    }

    public search(req: Request, res: Response) {
        return res.status(200).render("index");
    }

    public invalidRequest(req: Request, res: Response) {
        return res.status(404).send("error");
    }

    public getAPI() {
        const router = express.Router();
        router.use("/search", this.search.bind(this));
        router.use("/:slug", this.invalidRequest.bind(this));
        router.use("/", this.homepage.bind(this));
        return router;
    }
}

export default new SitesController();