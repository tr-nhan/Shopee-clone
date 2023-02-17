import express, {Request, Response, Router} from "express";

class SitesController {
    public constructor() {
        this.index = this.index.bind(this);
        this.search = this.search.bind(this);
        this.error = this.error.bind(this);
        this.signin = this.signin.bind(this);
        this.signup = this.signup.bind(this);
    }

    public index(req: Request, res: Response) {
        return res.status(200).render("index", {title: "Trang chủ"});
    }

    public search(req: Request, res: Response) {
        return res.status(200).render("index", {title: "Tìm kiếm"});
    }

    public error(req: Request, res: Response) {
        return res.status(404).render("error");
    }

    public signin(req: Request, res: Response) {
        return res.status(200).render("index", {title: "Đăng Nhập", page: "partials/loginform"});
    }

    public signup(req: Request, res: Response) {
        return res.status(200).render("index", {title: "Đăng ký", page: "partials/registryform"});
    }

    public requestMapping(): Router {
        const router = express.Router();
        router.use("/search", this.search);
        router.use("/signin", this.signin);
        router.use("/signup", this.signup);
        router.use("/:slug", this.error);
        router.use("/", this.index);
        return router;
    }
}

export default new SitesController();