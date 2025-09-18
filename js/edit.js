'use strict';

const id = Number(localStorage.getItem('selectedProductID'));
let products = JSON.parse(localStorage.getItem('products') || '[]');
const product = products.find(p => p.id === id);

if (!product) {
    alert('Товар не знайдено');
    window.location.href = 'list.html';
}

document.getElementById('name').value = product.name;
document.getElementById('description').value = product.description;
document.getElementById('price').value = product.price;

document.getElementById('editForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const description = document.getElementById('description').value.trim();
    const price = parseFloat(document.getElementById('price').value);

    if (!name || !description || isNaN(price) || price <= 0) {
        alert('Будь ласка, введіть правильні дані');
        return;
    }

    const idx = products.findIndex(p => p.id === id);
    products[idx] = { ...products[idx], name, description, price };
    localStorage.setItem('products', JSON.stringify(products));
    window.location.href = 'list.html';
});
