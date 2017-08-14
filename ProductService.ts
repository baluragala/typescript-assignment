import {IProductService} from "./IProductService";
import {Category} from "./Category";
import {Product} from "./Product";
import {Rating} from "./Rating";

export class ProductService implements IProductService {

    constructor(private products: Array<Product>,
                private categories: Array<Category>) {
    }

    getCategories(): Array<Category> {
        return this.categories;
    }

    getAllProducts(): Array<Product> {
        return this.products;
    }

    getProductsByCategory(categoryId: number): Array<Product> {
        let filteredProducts = this.products.filter(product => product.category === categoryId);
        return filteredProducts;
    }

    addProduct(product: Product): void {
        this.products.push(product);
    }

    addRating(productId: number, rating: Rating): void {
        let productIndex = this.products.findIndex(product => product.id === productId);
        let product = this.products[productIndex];
        if (product.ratings) {
            product.ratings.push(rating)
        } else {
            product.ratings = [];
            product.ratings.push(rating)
        }

        this.products.splice(productIndex, 1);
        this.products.push(product);
    }

}