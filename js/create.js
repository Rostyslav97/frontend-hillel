'use strict';

document.getElementById('createForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const description = document.getElementById('description').value.trim();
    const price = parseFloat(document.getElementById('price').value);

    if (!name || !description || isNaN(price) || price <= 0) {
        alert('Будь ласка, введіть правильні дані');
        return;
    }

    const products = JSON.parse(localStorage.getItem('products') || '[]');
    const newProduct = {
        id: Date.now(),
        name,
        description,
        price
    };

    products.push(newProduct);
    localStorage.setItem('products', JSON.stringify(products));
    window.location.href = 'list.html';
});
