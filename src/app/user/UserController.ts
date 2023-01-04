import UserRepository from "./UserRepository.js";
import {Request, Response} from "express";
import User from "./User.js";

class UserController{
    private repo: UserRepository;
    public constructor() {
        this.repo = new UserRepository();
    }
    public async index(req: Request, res: Response){
        let result = await User.findAll();
        return res.status(200).send(result);
    }
}
export default new UserController();