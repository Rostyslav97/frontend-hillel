import ProductView from "../../view/product/ProductView.js";


class ProductController {
    formSelector = null;
    formElement = null;
    imgSelector = null;
    imgElement = null;

    constructor(selectors) {
        this.#setElement(selectors.form, 'form')
        this.#setElement(selectors.imgPreview, 'img')
    }

    _fetchCallback(data) {
        console.log(data)
    }

    init() {
        this.#initEvents()
    }

    #initEvents () {
        this.formElement.addEventListener('submit', this.#fetchFormData);
        this.formElement.addEventListener('input', this.#previewImgHandler);
    }

    #previewImgHandler = ({target}) => {
        if(!(target instanceof HTMLInputElement)) return;
        if(target.type !== 'url') return;
        const {value: imgUrl} = target;
        this._renderImgByUrl(imgUrl);
    }


    _renderImgByUrl(imgUrl) {
        if(imgUrl.trim() === '') return;

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

        this._fetchCallback(data)
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

export default ProductController;