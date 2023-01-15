import {Application} from "express";
import SitesController from "../sites/SitesController.js";
import UserController from "../user/UserController.js";

export default class PathRouter {
    private app: Application;

    public constructor(app: Application) {
        this.app = app;
    }

    public route() {
        this.app.use("/api/test", (req, res) => UserController.index(req, res));
        this.app.use("*", SitesController.getAPI())
    }
}