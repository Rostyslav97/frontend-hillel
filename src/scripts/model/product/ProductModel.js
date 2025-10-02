import SingleProduct from "./SingleProduct.js";
import {routerControllerInstance} from "../../controller/router/RouterController.js";

class ProductModel {
    static productLSKey = 'products';
    #key = null;
    get products() {
        const prod = JSON.parse(localStorage.getItem(this.#key));
        if(prod === null) return [];
        return prod;
    };

    constructor(key) {
        this.#key = key;
    }
    saveProduct(product) {
        if(!(product instanceof SingleProduct)) return;
        const localProducts = [...this.products];

        let currentId = localProducts.length ? localProducts.at(-1).id + 1 : 1;
        const productUrl = routerControllerInstance.createProductRoute('edit_product', currentId)

        const productToSave = {
            ...product,
            id: currentId,
            url: productUrl
        };
        localProducts.push(productToSave)
        localStorage.setItem(this.#key, JSON.stringify(localProducts));

        return this.products.at(-1);
    }

    getProductById(productId) {
        return this.products.find(({id}) => productId === id)
    }

    updateProductById(productId, productData) {
        const localProducts = [...this.products];
        const productIndex = localProducts.findIndex(({id}) => id === productId);
        localProducts[productIndex] = {
            ...localProducts[productIndex],
            ...productData
        };

        localStorage.setItem(this.#key, JSON.stringify(localProducts))
    }
}

export default ProductModel;