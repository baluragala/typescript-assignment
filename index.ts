import {ProductService} from "./ProductService";
import {CATEGORIES, PRODUCTS} from "./data";

let service: ProductService = new ProductService(PRODUCTS, CATEGORIES);
console.log('Categories :', JSON.stringify(service.getCategories()));
console.log('Products :', JSON.stringify(service.getAllProducts()));
console.log('Filtered Products :', JSON.stringify(service.getProductsByCategory(1)));
service.addRating(1,{id:4,comment:'ok ok'});
console.log('Products :', JSON.stringify(service.getAllProducts()));