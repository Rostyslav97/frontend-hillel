'use strict';

class URLParser {
    constructor(url = window.location.href) {
        this.location = new URL(url);
    }

    get protocol() {
        return this.location.protocol;
    }

    get hostname() {
        return this.location.hostname;
    }

    get path() {
        return this.location.pathname;
    }

    get queryParams() {
        const params = {};
        for (const [key, value] of this.location.searchParams.entries()) {
            params[key] = value;
        }
        return params;
    }
}

const parser = new URLParser("https://example.com/products/item?search=book&page=2");

console.log(parser.protocol);
console.log(parser.hostname);
console.log(parser.path);
console.log(parser.queryParams);
