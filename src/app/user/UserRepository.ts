import IRepository from "../interfaces/IRepository.js";
import User from "./User.js";

export default class UserRepository implements IRepository<User> {
    public async create(item: User): Promise<boolean> {
        try {
            await item.save();
            return true;
        } catch (e) {
            console.log(e);
            return false;
        }
    }

    public async find(id: string): Promise<User | null> {
        let result;
        try {
            result = await User.findByPk(id);
            return result;
        } catch (e) {
            console.log(e);
            return null;
        }
    }

    public async findAll(): Promise<User[]> {
        return await User.findAll();
    }

    public async remove(item: User): Promise<boolean> {
        try {
            await item.destroy();
            return true;
        } catch (e) {
            console.log(e);
            return false;
        }
    }

    public async update(id: string, item: User): Promise<boolean> {
        try {
            let oldEntity = await User.findByPk(id);
            if(oldEntity == null){
                return false;
            }
            oldEntity?.update(item.get({plain : true}));
            await oldEntity?.save();
            return true;
        } catch (err) {
            console.log(err);
            return false;
        }
    }
}