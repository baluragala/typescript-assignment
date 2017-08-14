import {Category} from "./Category";
import {Product} from "./Product";
import {Rating} from "./Rating";

export interface IProductService {
    getCategories: () => Array<Category>;
    getAllProducts: () => Array<Product>;
    getProductsByCategory: (categoryId: number) => Array<Product>
    addProduct: (product: Product) => void;
    addRating: (productId: number, rating: Rating) => void;
}