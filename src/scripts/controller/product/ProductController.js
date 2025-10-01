import ProductView from "../../view/product/ProductView.js";
import SingleProduct from "../../model/product/SingleProduct.js";
import ProductModel from "../../model/product/ProductModel.js";
import {routerControllerInstance} from "../router/RouterController.js";


const productModelInstance = new ProductModel(ProductModel.productLSKey)

class ProductController {
    formSelector = null;
    formElement = null;
    imgSelector = null;
    imgElement = null;

    constructor(selectors) {
        this.#setElement(selectors.form, 'form')
        this.#setElement(selectors.imgPreview, 'img')

        this.#initEvents()
    }

    #initEvents () {
        this.formElement.addEventListener('submit', this.#fetchFormData);
        this.formElement.addEventListener('input', this.#previewImg);
    }

    #previewImg = ({target}) => {
        if(!(target instanceof HTMLInputElement)) return;
        if(target.type !== 'url') return;
        const {value: imgUrl} = target;

        if(imgUrl.trim() === '')

        if(!URL.canParse(imgUrl)) return;
        const image = new Image();
        image.src = imgUrl;

        ProductView.renderPreviewImage(this.imgElement, image)
    }
    #fetchFormData = (e) => {
        e.preventDefault();
        const {target: form} = e;
        const fields = Array.from(form.querySelectorAll('input, textarea'));
        const data = fields.reduce((acc, {name, value, type}) => {
            if(this.#validateFieldByType(type, value)) {
                acc[name] = value
            }
            return acc;
        }, {})

        const product = new SingleProduct(data)
        const savedProduct = productModelInstance.saveProduct(product);

        routerControllerInstance.redirectByKey('products_list')
        console.log(savedProduct)
    }

    #validateFieldByType(type, value) {
        let isValid = true;


        if(typeof value !== "string" || value.trim() === '') {
            isValid = false;
        }

        if(type === 'url') {
            isValid = URL.canParse(value)
        }

        return isValid
    }

    #setElement(selector, elName) {
        if(typeof selector !== "string" || selector.trim() === '') return;
        const element = document.querySelector(selector);

        if(!element) return;
        this[elName + 'Selector'] = selector;
        this[elName + 'Element'] = element;
    }
}

const selectorsConfig = {
    form: '#product-preferences-wrapper [data-form="productCreate"]',
    imgPreview: '#product-preferences-wrapper  [data-img-preview]',
}

console.log(document.querySelector(selectorsConfig.form))

const pControllerInstance = new ProductController(selectorsConfig)

export default ProductController;