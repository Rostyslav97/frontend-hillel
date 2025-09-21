'use strict';

function createView() {

    const createTemplate = ({id, firstName, lastName, phone}) => {
        const wrapper = document.createElement('li');
        wrapper.className = 'list-group-item d-flex align-items-center justify-content-between';
        wrapper.setAttribute('data-contact-id', id);

        wrapper.innerHTML = `
          <div class="text-black"><b>#${id} ${firstName} ${lastName}</b></div>
            <div class="d-flex justify-content-end gap-1">
              <button class="btn btn-success btn-sm" data-make-call><i class="bi bi-telephone"></i></button>
              <button class="btn btn-danger btn-sm" data-remove-contact><i class="bi bi-trash"></i></button>
            </div>
           `;

        return wrapper;
    }


    const renderContact = (el) => {
        const contactList = document.querySelector('[data-contact-list]');
        contactList.prepend(el);
    }

    const removeContact = (element) => {
        element.remove();
    }

    const resetForm = (form) => {
        form.reset();
    }


    const createCallTemplate = ({firstName, lastName, phone}) => {
        const wrp = document.createElement('div');
        wrp.className = 'card'
        wrp.innerHTML = `<div class="card-body">
            <h5 class="card-title">${firstName} ${lastName}</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">${phone}</h6>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
            <div class="text-center">
                <button class="btn btn-sm btn-danger"><i class="bi bi-telephone-x"></i></button>
            </div>
          </div>`

        return wrp
    }

    return {
        createTemplate,
        renderContact,
        resetForm,
        removeContact,
        createCallTemplate
    }

}

const ui = createView()