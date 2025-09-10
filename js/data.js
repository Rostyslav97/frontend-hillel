'use strict';

function createDataBase() {
    const OBJECT_KEYS = ['firstName', 'lastName', 'phone'];
    const DB = JSON.parse(localStorage.getItem('contacts')) || [];

    const saveToStorage = () => {
        localStorage.setItem('contacts', JSON.stringify(DB));
    }

    const validateObject = (objectToValidate) => {
        if(typeof objectToValidate !== 'object') return false;
        const keysToValidate = Object.keys(objectToValidate);

        return OBJECT_KEYS.every(key => keysToValidate.includes(key));
    }

    const getData = () => DB;

    const setData = (data) => {
        if(!data || typeof data !== "object" || !validateObject(data)) return null;

        let id = 1;
        if(DB.length > 0) {
            id = DB[DB.length - 1].id + 1;
        }

        const dataToSave = {...data, id};
        DB.push(dataToSave);
        saveToStorage();
        return dataToSave;
    }

    const deleteData = ({id}) => {
        if(typeof id !== 'number') return null;
        const index = DB.findIndex(user => user.id === id);
        if(index === -1) return null;
        const removed = DB.splice(index, 1)[0];
        saveToStorage();
        return removed;
    }

    return { getData, setData, deleteData };
}

const dataBase = createDataBase();
