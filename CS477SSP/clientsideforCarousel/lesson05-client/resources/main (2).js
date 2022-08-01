"use strict";

window.onload = function () {
  fetchProducts();
};

function fetchProducts() {
  fetch("http://localhost:3000")
    .then((response) => response.json())
    .then((products) => displayProducts(products)
    .catch(err=>console.error(err));
}
