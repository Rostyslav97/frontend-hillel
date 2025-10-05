'use strict';

const data = fetch('https://jsonplaceholder.typicode.com/todos?_limit=100');


data
    .then((response) => {
        return response.json()
    })
    .then((parsedData) => {
        console.log(parsedData)
    })
// console.log(data)



fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: 'Hello', body: 'World' })
})
    .then(res => res.json())
    .then(data => console.log(data));
