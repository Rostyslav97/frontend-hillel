'use strict';

// Ordered requests
const getTodos = (limit = 100) => {
    let url = `https://jsonplaceholder.typicode.com/todos`;
    if(limit) {
        url += `?_limit=${limit}`
    }
    return fetch(url)
}

const getUserById = (id) => {
    let url = `https://jsonplaceholder.typicode.com/users/${id}`;
    return fetch(url)
}

const getAlbums = (userId) => {
    let url = `https://jsonplaceholder.typicode.com/albums?userId=${userId}`;
    return fetch(url)
}

getTodos(10)
    .then((resp) => {
        return resp.json()
    })
    .then((data) => {
        const random = Math.floor(Math.random() * 10);
        const {userId} = data.find(({id}) => random === id);
        return getUserById(userId)
    })
    .then((resp) => {
        return resp.json()
    })
    .then(({id}) => {
       return getAlbums(id)
    })
    .catch((err) => {
        console.log(err)
    })
    .finally(() => {

    })


// Parallel requests
// Promise.all - відслідковує  реквести до першої помилки і падає
// Promise.allSettled - відслідковує  реквести всі і НЕ падає якщо в реквесті є помилка
// Promise.race - відслідковує реквести і повертає той який перший виконався

const getAllAlbums = () => {
    let url = `https://jsonplaceholder.typicode.com/albums`;
    return fetch(url)
}

const getAllTodos = () => {
    let url = `https://jsonplaceholder.typicode.com/todos`;
    return fetch(url)
}

const dataRequests = [getAllTodos(), getAllAlbums()];
const promises = Promise.allSettled(dataRequests);

promises
    .then((arr) => {
        console.log(arr)
    })


console.log(dataRequests)

