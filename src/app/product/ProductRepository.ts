import IRepository from "../interfaces/IRepository.js";
import Product from "./Product.js";
import {it} from "node:test";

export default class ProductRepository implements IRepository<Product>{
    public async create(item: Product): Promise<boolean> {
        try{
            await item.save();
            return true
        }
        catch (e) {
            console.log(e);
            return false
        }
    }

    public async find(id: string): Promise<Product | null> {
        try{
            return await Product.findByPk(id);
        }
        catch (e) {
            console.log(e);
            return null;
        }

    }

    public async findAll(): Promise<Product[]> {
        return await Product.findAll();
    }

    public async remove(item: Product): Promise<boolean> {
        try{
            await item.destroy()
            return true;
        }
        catch (e) {
            console.log(e);
            return false;
        }
    }

    public async update(id: string, item: Product): Promise<boolean> {
        try{
            let oldEntity = await Product.findByPk(id);
            if(oldEntity == null){
                return false;
            }
            await oldEntity?.update(item.get({plain : true}));
            return true;
        }
        catch (e) {
            console.log(e);
            return false;
        }
    }

}