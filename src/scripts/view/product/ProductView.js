class ProductView {

    static renderPreviewImage(path, source) {
        source.classList.add('img-fluid')
        path.innerHTML = '';
        path.append(source)
    }

    static clearPreviewImage() {
        path.innerHTML = '';
    }

    static #constructProductListItemTemplate({description, title, img, id, url}) {
        const wrapper = document.createElement('div');
        wrapper.className = "col-3";
        wrapper.setAttribute('data-product-id', id);

        wrapper.innerHTML =  `
                        <div class="card mb-3">
                            <div class="card-img-top p-3 product-img" style="background-image: url('${img}')" title="${title}">
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">${title}</h5>
                                <p class="card-text">${description}</p>
                                <a href="${url}" class="btn btn-primary">Go to edit</a>
                            </div>
                        </div>`.trim();
        return wrapper;
    }
    static renderProducts(productsList, containerEl) {
        const defaultProductImg = 'https://niteair.co.uk/wp-content/uploads/2023/08/default-product-image.png';

        let loadedImagesCount = 0;
        const row = document.createElement('div')
        row.className = 'row';


        productsList.forEach((product) => {
            // pre-load product img
            const productImg = new Image()
            productImg.addEventListener('load', (e) => {
                console.log(e);

                loadedImagesCount += 1;

                if(loadedImagesCount === productsList.length) {
                    containerEl.append(row)
                }
            })

            productImg.src = product.img

            // create template
            const template = ProductView.#constructProductListItemTemplate(product);
            row.append(template)
        })
    }

}

export default ProductView