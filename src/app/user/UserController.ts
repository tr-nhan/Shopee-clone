import UserRepository from "./UserRepository.js";
import {Request, Response} from "express";

class UserController{
    private repo: UserRepository;
    public constructor() {
        this.repo = new UserRepository();
    }
    public async index(req: Request, res: Response){
        let result = await this.repo.findAll();
        return res.status(200).send(result);
    }
}
export default new UserController();