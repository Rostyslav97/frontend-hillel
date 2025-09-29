'use strict';

class Navigation {
    constructor(menuSelector, contentSelector) {
        this.menu = document.querySelector(menuSelector);
        this.content = document.querySelector(contentSelector);
        this.links = Array.from(this.menu.querySelectorAll('a'));

        this.onLinkClick = this.onLinkClick.bind(this);
        this.onPopState = this.onPopState.bind(this);

        this.links.forEach(link => link.addEventListener('click', this.onLinkClick));

        window.addEventListener('popstate', this.onPopState);

        this.updateActiveLink(window.location.pathname);
    }

    updateActiveLink(pathname) {
        this.links.forEach(link => {
            if (link.dataset.path === pathname) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });

        this.content.innerHTML = `<h1>${pathname.replace('/', '').toUpperCase() || 'HOME'}</h1>`;
    }

    onLinkClick(event) {
        event.preventDefault();
        const path = event.currentTarget.dataset.path;

        history.pushState({}, '', path);
        this.updateActiveLink(path);
    }

    onPopState(event) {
        this.updateActiveLink(window.location.pathname);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new Navigation('#nav-menu', '#content');
});
