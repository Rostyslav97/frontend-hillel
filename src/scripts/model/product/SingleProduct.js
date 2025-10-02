class SingleProduct {
    title = null;
    img = null;
    description = null;

    constructor(productConfig) {
        this.title = productConfig['product-title'];
        this.description = productConfig['product-description'];
        this.img = new URL(productConfig['img-url'])
    }
}

export default SingleProduct;