import {Request, Response} from "express";

class SitesController {
    public homepage(req: Request, res: Response) {
        return res.status(200).render("index", {
            titles: "Trang Chủ",
            pages: "components/header"
        });
    }

    public search(req: Request, res: Response) {
        return res.status(200).render("index", {
            titles: "Tìm Kiếm",
            pages: "components/searchform"
        });
    }

    public invalidRequest(req: Request, res: Response) {
        return res.status(404).render("error");
    }
}

export default new SitesController();