import { Application } from "express";
import SitesController from "../sites/SitesController.js";
import UserController from "../user/UserController.js";


export default class PathRouter {
  private app: Application;

  public constructor(app: Application) {
    this.app = app;
  }

  public route(): void {
    this.app.use("/user", UserController.requestMapping());
    this.app.use("/", SitesController.requestMapping());
  }
}