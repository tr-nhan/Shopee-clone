import express, {Request, Response, Router} from "express";
import ProductRepository from "../product/ProductRepository.js";

class SitesController {
    private productCard: ProductRepository;
    public constructor() {
        this.index = this.index.bind(this);
        this.search = this.search.bind(this);
        this.error = this.error.bind(this);
        this.productCard = new ProductRepository();
    }

    public async index(req: Request, res: Response) {
        let result = await this.productCard.findAll();
        return res.status(200).render("index",
          {
              title: "Trang chủ",
              appContainer: "layouts/product-page",
              homeProduct: result,
          });
    }

    public search(req: Request, res: Response) {
        return res.status(200).render("index", {
            title: "Tìm kiếm"
        });
    }

    public error(req: Request, res: Response) {
        return res.status(404).render("error");
    }

    public requestMapping(): Router {
        const router = express.Router();
        router.use("/search", this.search);
        router.use("/:slug", this.error);
        router.use("/", this.index);
        return router;
    }
}

export default new SitesController();