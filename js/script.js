'use strict';

class URLParser {
    constructor(url) {
        this.url = url;
    }

    get protocol() {
        const protocolEnd = this.url.indexOf(':');
        return protocolEnd !== -1 ? this.url.substring(0, protocolEnd + 1) : '';
    }

    get hostname() {
        let start = this.url.indexOf('//');
        if (start !== -1) {
            start += 2;
        } else {
            start = 0;
        }

        const end = this.url.indexOf('/', start);
        const hostPart = end !== -1 ? this.url.substring(start, end) : this.url.substring(start);

        // Відкидаємо порт, якщо є
        const colonIndex = hostPart.indexOf(':');
        return colonIndex !== -1 ? hostPart.substring(0, colonIndex) : hostPart;
    }

    get path() {
        const pathStart = this.url.indexOf(this.hostname) + this.hostname.length;
        const queryStart = this.url.indexOf('?', pathStart);
        if (queryStart !== -1) {
            return this.url.substring(pathStart, queryStart);
        }
        const hashStart = this.url.indexOf('#', pathStart);
        if (hashStart !== -1) {
            return this.url.substring(pathStart, hashStart);
        }
        return this.url.substring(pathStart);
    }

    get queryParams() {
        const queryStart = this.url.indexOf('?');
        if (queryStart === -1) return {};

        const queryEnd = this.url.indexOf('#', queryStart);
        const queryString = queryEnd !== -1
            ? this.url.substring(queryStart + 1, queryEnd)
            : this.url.substring(queryStart + 1);

        const pairs = queryString.split('&');
        const params = {};

        for (const pair of pairs) {
            if (!pair) continue;
            const [key, value = ''] = pair.split('=');
            params[decodeURIComponent(key)] = decodeURIComponent(value);
        }

        return params;
    }
}

const parser = new URLParser("https://example.com/products/item?search=book&page=2");

console.log(parser.protocol);
console.log(parser.hostname);
console.log(parser.path);
console.log(parser.queryParams);
