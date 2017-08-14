import {Product} from "./Product";
import {Category} from "./Category";

export const CATEGORIES: Array<Category> = [
    {
        id: 1,
        name: 'MOBILES'
    },
    {
        id: 2,
        name: 'BAKERY'
    },
    {
        id: 3,
        name: 'FRUITS'
    }
];

export const PRODUCTS: Array<Product> = [
    {
        id: 1,
        name: 'iphone',
        originalPrice: 599,
        stock: 20,
        category: 1,
        ratings: [
            {
                id: 1,
                comment: 'Good phone'
            },
            {
                id: 2,
                comment: 'Awesome'
            },
            {
                id: 3,
                comment: 'Good but pricy'
            }
        ]
    },
    {
        id: 1,
        name: 'bread',
        originalPrice: 10,
        stock: 20,
        category: 2,
        ratings: [
            {
                id: 1,
                comment: 'fresh and Yummy'
            },
            {
                id: 2,
                comment: 'good taste'
            }
        ]
    }
];