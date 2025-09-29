import SingleRoute from "./SingleRoute.js";
import RouterModel from "./RouterModel.js";

const routerModel = new RouterModel;

const productsListRoute = new SingleRoute({
    title: 'Products list',
    url: '/ProductsList.html',
    isDisabled: false
})

const editProduct = new SingleRoute({
    title: 'Edit product',
    url: '/EditProduct.html',
    isDisabled: false
})

routerModel.addRoute(productsListRoute)
routerModel.addRoute(editProduct)

export default routerModel.getRoutes();