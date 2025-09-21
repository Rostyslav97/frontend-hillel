'use strict';

function createModel() {
    // localStorage
    const DB_KEY = 'contacts';

    const getData = () => {
        const data = JSON.parse(localStorage.getItem(DB_KEY));
        if(data === null) return [];
        return data;
    }

    const setData = (contact = null) => {
        if(contact === null) return null;

        let id = 1;
        const currentData = getData();
        if(currentData.length) id = currentData.at(-1).id + 1;

        const dataToSave = {...contact, id};
        currentData.push(dataToSave);
        localStorage.setItem(DB_KEY, JSON.stringify(currentData));

        return getData().at(-1);
    }

    const deleteContact = (id) => {
        if(typeof id !== 'number') return null;

        const currentData = getData();
        const contactIndex = currentData
            .findIndex(({id: contactID}) => contactID === id);

        const removedContacts = currentData.splice(contactIndex, 1);
        localStorage.setItem(DB_KEY, JSON.stringify(currentData));

        if(!removedContacts.length) return null;

        return removedContacts[0]
    }

    const getContactById = (contactId) => {
        if(typeof contactId !== 'number') return null;

        const currentData = getData();
        return currentData.find(({id}) => contactId === id);
    }

    return {
        getData,
        setData,
        deleteContact,
        getContactById
    }

}

const model = createModel();