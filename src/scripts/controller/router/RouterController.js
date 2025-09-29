'use strict';
import routerConfig from '../../model/router/routerConfig.js'
import {routerView} from "../../view/router/RouterView.js";
import SingleRoute from "../../model/router/SingleRoute.js";
export default class RouterController {
    init() {
        if (!routerConfig.some((route) => route instanceof SingleRoute)) {
            throw new Error('Route array is not valid')
        }
        routerView.createMenu(routerConfig);
        routerView.renderMenu();
    }
}

new RouterController().init()
