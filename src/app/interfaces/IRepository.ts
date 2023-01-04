export default interface IRepository<T>{
    find(id: string): Promise<T | null>;
    findAll(): Promise<T[]>;
    create(item: T): Promise<boolean>;
    remove(item: T): Promise<boolean>;
    update(id: string, item: T): Promise<boolean>;
}