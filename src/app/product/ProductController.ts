import ProductRepository from "./ProductRepository.js";

export default class ProductController{
    private repo: ProductRepository;
    public constructor() {
        this.repo = new ProductRepository();
    }
    public index(req: Request, res: Response){

    }
}