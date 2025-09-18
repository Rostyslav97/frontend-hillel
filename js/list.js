'use strict';

const tableBody = document.getElementById('productTable');

function loadProducts() {
    const products = JSON.parse(localStorage.getItem('products') || '[]')
        .sort((a, b) => b.id - a.id); // нові зверху
    tableBody.innerHTML = '';

    products.forEach(p => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
      <td>${p.id}</td>
      <td>${p.name}</td>
      <td>${p.price.toFixed(2)}</td>
      <td>
        <button class="btn btn-primary btn-sm me-2 edit" data-id="${p.id}">Edit</button>
        <button class="btn btn-danger btn-sm delete" data-id="${p.id}">Delete</button>
      </td>`;
        tableBody.appendChild(tr);
    });
}

tableBody.addEventListener('click', e => {
    if (e.target.classList.contains('edit')) {
        localStorage.setItem('selectedProductID', e.target.dataset.id);
        window.location.href = 'edit.html';
    }
    if (e.target.classList.contains('delete')) {
        const id = Number(e.target.dataset.id);
        let products = JSON.parse(localStorage.getItem('products') || '[]');
        products = products.filter(p => p.id !== id);
        localStorage.setItem('products', JSON.stringify(products));
        loadProducts();
    }
});

loadProducts();
