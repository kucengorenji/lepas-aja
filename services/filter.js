import axios from "axios";
import images from '../assets/category'

const LEPASAJA_ENDPOINT = 'https://lepasaja-backend.herokuapp.com/api/v1';

export async function fetchProducts() {
    const response = await axios.get(
        `${LEPASAJA_ENDPOINT}/products`
    );

    const products = await response.data;
    console.log(products);
    return products;
}

export async function fetchCategory() {
    const response = await axios.get(
        `${LEPASAJA_ENDPOINT}/categories`
    );

    const dataCategories = await response.data.data;
    // console.log(dataCategories);
    return dataCategories;
}

export async function filteringProducts(products, category) {
    const filteredProducts = products.filter(product => product.category === category);

    return filteredProducts;
}