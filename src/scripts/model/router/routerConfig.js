import SingleRoute from "./SingleRoute.js";
import RouterModel from "./RouterModel.js";

const routerModel = new RouterModel;

const productsListRoute = new SingleRoute({
    title: 'Products list',
    url: '/ProductsList.html',
    isDisabled: false,
    key: 'products_list'
})

const editProduct = new SingleRoute({
    title: 'Edit product',
    url: '/EditProduct.html',
    isDisabled: false,
    key: 'edit_product'
})

const createProduct = new SingleRoute({
    title: 'Create product',
    url: '/CreateProduct.html',
    isDisabled: false,
    key: 'create_product'
})

routerModel.addRoute(productsListRoute)
routerModel.addRoute(editProduct)
routerModel.addRoute(createProduct)

export default routerModel;