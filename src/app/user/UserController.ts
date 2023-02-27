import UserRepository from "./UserRepository.js";
import express, { Request, Response, Router } from "express";

class UserController {
  private repo: UserRepository;

  public constructor() {
    this.repo = new UserRepository();
  }

  public async index(req: Request, res: Response) {
    let result = await this.repo.findAll();
    return res.status(200).send(result);
  }

  public show(req: Request, res: Response) {
    return res.status(200).send("<h1>Users</h1>");
  }

  public requestMapping(): Router {
    const route = express.Router();
    route.get("/users", this.index.bind(this));
    route.get("/", this.show.bind(this));
    return route;
  }
}

export default new UserController();