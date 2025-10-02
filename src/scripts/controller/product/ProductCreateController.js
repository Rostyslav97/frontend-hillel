import ProductController from "./ProductController.js";
import SingleProduct from "../../model/product/SingleProduct.js";
import {routerControllerInstance} from "../router/RouterController.js";
import ProductModel from "../../model/product/ProductModel.js";


const productModelInstance = new ProductModel(ProductModel.productLSKey)
export class ProductCreateController extends ProductController {
    _fetchCallback(data) {
        const product = new SingleProduct(data);
        productModelInstance.saveProduct(product);
        routerControllerInstance.redirectByKey('products_list')
    }
}

const selectorsConfig = {
    form: '#product-preferences-wrapper [data-form="productCreate"]',
    imgPreview: '#product-preferences-wrapper  [data-img-preview]',
}


const pControllerInstance = new ProductCreateController(selectorsConfig);
pControllerInstance.init()