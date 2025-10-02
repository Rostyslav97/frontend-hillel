'use strict';
import SingleRoute from './SingleRoute.js'
export default class RouterModel {
    #routes = [];

    getCurrentId() {
        let currentId = 1;
        const lastRoute = this.#routes.at(-1);
        if(!lastRoute) return currentId;
        currentId = lastRoute.id + 1;
        return currentId;
    }
    addRoute(route) {
        if(route instanceof SingleRoute) {
            route.id = this.getCurrentId();
            this.#routes.push(route)
        }
    }

    getRoutes() {
        return Object.freeze(this.#routes)
    }

    getRouteById(routeId) {
        return this.#routes.find(({id}) => routeId === id);
    }
    getRouteByKey(routeKey) {
        return this.#routes.find(({key}) => routeKey === key);
    }
    removeRouteById(routeId) {
        const index = this.#routes.findIndex(({id}) => routeId === id);
        return this.#routes.splice(index, 1)[0];
    }

}


