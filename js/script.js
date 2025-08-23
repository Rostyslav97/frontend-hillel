'use strict';

const toggleBtn = document.getElementById("toggle-theme");

toggleBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark-theme");
});