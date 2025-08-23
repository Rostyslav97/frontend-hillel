'use strict';

const filterSelect = document.getElementById('filter');
const cards = document.querySelectorAll('.card');

filterSelect.addEventListener('change', function() {
    const selected = filterSelect.value;

    cards.forEach(function(card) {
        if (selected === 'all' || card.dataset.category === selected) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});