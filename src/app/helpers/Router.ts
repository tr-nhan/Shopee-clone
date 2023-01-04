import {Application} from "express";
import SitesController from "../sites/SitesController.js";
import UserController from "../user/UserController.js";

export default class Router {
    private app: Application;
    public constructor(app: Application) {
        this.app = app;
    }

    public route() {
        this.app.use("/api/test", (req, res) => UserController.index(req, res));
        this.app.use("/search", (req, res) => SitesController.search(req, res));
        this.app.use("/:slug", (req, res) => SitesController.invalidRequest(req, res));
        this.app.use("/", (req, res) => SitesController.homepage(req, res));
    }
}