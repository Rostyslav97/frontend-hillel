'use strict';

function createController() {
    const form = document.querySelector('[data-form]');
    const contactList = document.querySelector('[data-contact-list]');

    const submitHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();

        const {target: currentForm} = e;
        const data = {};
        const inputs = currentForm.querySelectorAll('input');
        inputs.forEach(({name, value}) => data[name] = value)


        const savedElement = model.setData(data);
        const template = ui.createTemplate(savedElement);
        ui.renderContact(template);
        ui.resetForm(currentForm);
    }

    form.addEventListener('submit', submitHandler)

    const renderContactsOnLoad = () => {
        const contacts = model.getData();
        contacts.forEach(contact => {
            const template = ui.createTemplate(contact);
            ui.renderContact(template);
        })
    }

    document.addEventListener('DOMContentLoaded', renderContactsOnLoad);


    const removeContactHandler = ({target}) => {
        if(target.closest('[data-remove-contact]') === null) return;

        const contactElement = target.closest('[data-contact-id]');
        const contactId = +contactElement.getAttribute('data-contact-id');

        const removedContact = model.deleteContact(contactId);

        if(removedContact !== null) {
            ui.removeContact(contactElement);
        }
    }
    const makeCallHandler = ({target}) => {
        if(target.closest('[data-make-call]') === null) return;
        const callBlock = document.querySelector('[data-active-call]');


        const contactElement = target.closest('[data-contact-id]');
        const contactId = +contactElement.getAttribute('data-contact-id');
        const contact = model.getContactById(contactId)

        const durChangeHandler = (duration) => {
            console.log(duration)
        }

        const stateChangeHandler = (state) => {
            console.log(state)
        }

        const call = new Call(durChangeHandler, stateChangeHandler);
        call.makeCall(contact)

        const callTemplate = ui.createCallTemplate(contact);
        callBlock.append(callTemplate)

        console.log(contact, call)
    }

    contactList.addEventListener('click', removeContactHandler);
    contactList.addEventListener('click', makeCallHandler);
}

createController()