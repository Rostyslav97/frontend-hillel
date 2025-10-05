'use strict';

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

const getUserAlbumsFromTodoItem = async () => {
    const random = Math.floor(Math.random() * 10);
    let todos = null;
    let user = null;
    let albums = null;

    try {
        todos = await getTodos(10);
        todos = await todos.json()
        const {userId} = todos.find(({id}) => id === random)
        user = await getUserById(userId)
        user = await user.json()
        albums = await getAlbums(user.id);
        albums = await albums.json()
    } catch (e) {
        console.log(e)
    } finally {
        console.log(todos, user, albums)
    }

}

getUserAlbumsFromTodoItem()

const parallelsAsyncReq = async () => {
    const todos = Promise.allSettled([getTodos(30), getTodos(20), getTodos(10)]);
    const res = await todos;

    for(const innerPromise of res) {
        let data = await innerPromise;
        data = await data.value.json();
        console.log(data);
    }
}
parallelsAsyncReq()