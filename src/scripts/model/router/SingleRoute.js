export default class SingleRoute {
    id = null
    title = null
    url = null
    isDisabled = null
    static baseUrl = null;


    constructor({title, url, isDisabled}) {
        if(SingleRoute.baseUrl === null) {
            this.#createBaseUrl()
        }

        if(this.#validateString(title)) this.title = title;
        if(this.#validateString(url)) this.#setValidUrl(url);

        if(typeof isDisabled !== 'boolean') throw new Error('isDisabled not a boolean')
        this.isDisabled = isDisabled;
    }

    #createBaseUrl() {
        const urlAsArray = location.pathname.split('/')
        urlAsArray.pop();
        const path = urlAsArray.join('/')


        SingleRoute.baseUrl = `${location.origin}${path}`;
    }

    #validateString = (str) => {
        if(typeof str !== 'string') return false;
        if(str.trim().length === 0) return false;

        return true;
    }
    #setValidUrl = (urlStr) => {
        const urlString = `${SingleRoute.baseUrl}${urlStr}`;
        console.log(urlString)
        this.url = new URL(urlString)
    }
}