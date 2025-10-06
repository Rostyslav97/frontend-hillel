
'use strict';

// Request structure 

// Request URL https://jsonplaceholder.typicode.com/posts/1
// Request Method GET
// Status Code 200 OK
// Remote Address 104.21.48.1:443
// Referrer Policy strict-origin-when-cross-origin

// Request Methods

// GET - get data. Have headers. Can yse query params. (Can handle body but not recommended!!!).
// Для взятия даних з сервера

fetch('https://jsonplaceholder.typicode.com/posts')


// POST - create data. Have headers. Can use body. Can use query params.

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: 'foo', body: 'bar', userId: 1 })
})


// PUT - update data. Have headers. Can use body. Can use query params.
// Слугує для оновлення даних на сервері, повністю замінюючи існуючі дані новими
// даними або створюючи нові дані, якщо вони не існують.

fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: 'foo', body: 'bar', userId: 1 })
})

// PATCH - partial update data. Have headers. Can use body. Can use query params.
// Служить для часткового оновлення даних на сервері, змінюючи лише вказані поля,
// залишаючи інші поля без змін.

fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: 'foo'})
})


// DELETE - delete data. Have headers. Can use query params. No body.

fetch('https://jsonplaceholder.typicode.com/posts/1', {method: 'DELETE'})


// HEAD - get headers
// OPTIONS - get options
// CONNECT - establish a tunnel to the server
// TRACE - perform a message loop-back test



// CORS - Cross-Origin Resource Sharing
// CSRF - Cross-Site Request Forgery
// REST - Representational State Transfer
// SOAP - Simple Object Access Protocol
// GraphQL - query language for APIs


// GET request
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(res => res.json())
    .then(data => console.log('GET:', data));


// // POST request
// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ title: 'foo', body: 'bar', userId: 1 })
// })
//     .then(res => res.json())
//     .then(data => console.log('POST:', data));

// // PUT request
// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//     method: 'PUT',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ id: 1, title: 'updated', body: 'baz', userId: 1 })
// })
//     .then(res => res.json())
//     .then(data => console.log('PUT:', data));

// // DELETE request
// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//     method: 'DELETE'
// })
//     .then(res => console.log('DELETE status:', res.status));