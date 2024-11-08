const productThemselvesContainer = document.querySelector('.products-themselves');
const productItself = document.querySelectorAll('.product-itself');
const productItselfImage = document.querySelectorAll('.product-itself-image-itself');
const productItselfAddToCartButton = document.querySelectorAll('.product-itself-add-to-cart-button');
const productItselfIcrementDecrementButtonsContainer = document.querySelector('.product-itself-buttons-increment-decrement-buttons');
const productItselfDecrementButton = document.querySelectorAll('.product-itself-buttons-decrement-button');
const productItselfIncrementButton = document.querySelectorAll('.product-itself-buttons-increment-button');
const productItselfTextCategory = document.querySelectorAll('.product-itself-text-category');
const productItselfTextName = document.querySelectorAll('.product-itself-text-name');
const productItselfTextPrice = document.querySelectorAll('.product-itself-text-category');

// DISPLAYING DATA

window.addEventListener('DOMContentLoaded', displayData);

async function displayData() {
    const response = await fetch('./data.json');
    const productData = await response.json();


};