import ProductModel from "../../model/product/ProductModel.js";
import ProductView from "../../view/product/ProductView.js";
const productModel = new ProductModel(ProductModel.productLSKey)
class ProductListController {
    productContainerSelector = null;
    productContainerElement = null;

    constructor(selectors) {
        if(selectors.productContainer) {
            const el = document.querySelector(selectors.productContainer);
            if(el) {
                this.productContainerElement = el;
                this.productContainerSelector = selectors.productContainer
            }
        }
    }

    init() {
        this.#initEvents()
    }

    #initEvents() {
        document.addEventListener('DOMContentLoaded', this.#handleRenderProducts)
    }

    #handleRenderProducts = () => {
        const {products} = productModel;
        ProductView.renderProducts(products, this.productContainerElement)
        // console.log(products);
    }
}

const pListController = new ProductListController({
    productContainer: '[data-products-list]'
})

pListController.init()