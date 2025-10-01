export default class RouterView {
    #menu = null

    renderMenu() {
        const placeToRender = document.querySelector('#navbarSupportedContent');
        placeToRender.prepend(this.#menu);
    }
    createMenu(arrayOfRoutes) {
        const wrapper = this.#createWrapper();
        arrayOfRoutes.forEach((singleRoute) => {
            const routeItem = document.createElement('li')
            routeItem.className = 'nav-item';

            const link = document.createElement('a');
            link.className = 'nav-link';
            link.href = singleRoute.url.href;
            link.target = '_blank';
            link.innerHTML = singleRoute.title;
            if(singleRoute.isDisabled) link.classList.add('disabled');

            routeItem.append(link);
            wrapper.append(routeItem);
        })
        this.#menu = wrapper;
        return this.#menu;
    }

    #createWrapper() {
        const wrapper = document.createElement('ul')
        wrapper.className = 'navbar-nav me-auto mb-2 mb-lg-0';
        return wrapper
    }
}

export const routerView = new RouterView;