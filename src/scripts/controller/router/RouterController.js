'use strict';
import routerModel from '../../model/router/routerConfig.js'
import {routerView} from "../../view/router/RouterView.js";
import SingleRoute from "../../model/router/SingleRoute.js";
export default class RouterController {
    init() {
        if (!routerModel.getRoutes().some((route) => route instanceof SingleRoute)) {
            throw new Error('Route array is not valid')
        }
        routerView.createMenu(routerModel.getRoutes());
        routerView.renderMenu();

        return this;
    }

    redirectByKey(key) {
        const route = routerModel.getRouteByKey(key);
        window.location.href = route.url.href;
    }

    createProductRoute(parentPageKey, productId) {
        const route = routerModel.getRouteByKey(parentPageKey);
        const productUrl = `${route.url}?productId=${productId}`
        return productUrl
    }

    getSearchParamValue(paramName) {
        const searchParams =  new URLSearchParams(location.search);
        if(!searchParams.has(paramName)) return null;

        return searchParams.get(paramName)
    }
}


export const routerControllerInstance = new RouterController().init()
