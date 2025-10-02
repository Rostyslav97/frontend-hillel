import ProductController from "./ProductController.js";
import SingleProduct from "../../model/product/SingleProduct.js";
import {routerControllerInstance} from "../router/RouterController.js";
import ProductModel from "../../model/product/ProductModel.js";

const productModelInstance = new ProductModel(ProductModel.productLSKey)
class ProductEditController extends ProductController {
    static #inputNameMap = {
        'product-title': 'title',
        'img-url': 'img',
        'product-description': 'description',
    }

    // this.formElement - came from ProductController
    #prefillForm() {
        const productId = +routerControllerInstance.getSearchParamValue('productId');
        const product = productModelInstance.getProductById(productId);
        const inputs = this.formElement.querySelectorAll('input, textarea');

        inputs.forEach((input) => {
            const productPropName = ProductEditController.#inputNameMap[input.name];
            input.value = product[productPropName];
            if(input.name === 'img-url') {
                this._renderImgByUrl(product[productPropName]);
            }
        })
    }

    _fetchCallback(data) {
        const productId = +routerControllerInstance.getSearchParamValue('productId');
        const product = new SingleProduct(data);
        productModelInstance.updateProductById(productId, product);
        routerControllerInstance.redirectByKey('products_list')
    }
    init() {
        this.#prefillForm();
        super.init() // super - викликає метод з бітьківського класу
    }
}

const selectorsConfig = {
    form: '#product-preferences-wrapper [data-form="productEdit"]',
    imgPreview: '#product-preferences-wrapper  [data-img-preview]',
}

const pControllerInstance = new ProductEditController(selectorsConfig);
pControllerInstance.init()