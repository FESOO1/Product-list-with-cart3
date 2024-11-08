const productThemselvesContainer = document.querySelector('.products-themselves');
const productItself = document.querySelectorAll('.product-itself');
const productItselfImage = document.querySelectorAll('.product-itself-image-itself');
const productItselfAddToCartButton = document.querySelectorAll('.product-itself-add-to-cart-button');
const productItselfIcrementDecrementButtonsContainer = document.querySelectorAll('.product-itself-buttons-increment-decrement-buttons');
const productItselfIcrementDecrementOutputText = document.querySelectorAll('.product-itself-buttons-increment-decrement-output');
const productItselfDecrementButton = document.querySelectorAll('.product-itself-buttons-decrement-button');
const productItselfIncrementButton = document.querySelectorAll('.product-itself-buttons-increment-button');
const productItselfTextCategory = document.querySelectorAll('.product-itself-text-category');
const productItselfTextName = document.querySelectorAll('.product-itself-text-name');
const productItselfTextPrice = document.querySelectorAll('.product-itself-text-price');

// CART
const cartItselfEmptyContainer = document.querySelector('.cart-itself-empty');
const cartItselfProductContainer = document.querySelector('.cart-itself-product-container');
const cartConfirmOrderButton = document.querySelector('.cart-itself-product-confirm-order-button');
const cartItselfNumberOfProductsText = document.getElementById('cartItselfNumberOfProductsText');
let numberOfProducts = 0;

// DISPLAYING DATA

window.addEventListener('DOMContentLoaded', displayData);

async function displayData() {
    const response = await fetch('./data.json');
    const productData = await response.json();

    for (let i = 0; i < productItself.length; i++) {
        // PRODUCT IMAGE
        productItselfImage[i].src = productData[i].image.desktop;
        productItselfImage[i].setAttribute('alt', productData[i].name);
        // PRODUCT TEXT
        productItselfTextCategory[i].textContent = productData[i].category;
        productItselfTextName[i].textContent = productData[i].name;
        productItselfTextPrice[i].textContent = '$'  + productData[i].price.toFixed(2);
    };
};

// BUTTONS

for (let i = 0; i < productItselfAddToCartButton.length; i++) {
    // PRODUCT ADD TO CART BUTTON
    let isAddedToCart = false;
    productItselfAddToCartButton[i].addEventListener('click', () => {
        isAddedToCart = true;
        productItselfAddToCartButton[i].style.display = 'none';
        productItselfIcrementDecrementButtonsContainer[i].style.display = 'flex';

        // NUMBER OF PRODUCTS TEXT
        numberOfProducts++;
        cartItselfNumberOfProductsText.textContent = numberOfProducts;
        
        // DISPLAYING THE PRODUCT IN THE CART
        cartItselfEmptyContainer.style.display = 'none';
        cartItselfProductContainer.style.display = 'flex';

    });


    // INCREMENT AND DECREMENT BUTTONS
    let productCounter = 1;

    // DECREMENT BUTTON
    productItselfDecrementButton[i].addEventListener('click', () => {
        if (productCounter > 1) {
            productCounter--;
            productItselfIcrementDecrementOutputText[i].textContent = productCounter;
        } else {
            isAddedToCart = false;
            productItselfAddToCartButton[i].style.display = 'flex';
            productItselfIcrementDecrementButtonsContainer[i].style.display = 'none';
        };
    });

    // INCREMENT BUTTON
    productItselfIncrementButton[i].addEventListener('click', () => {
        productCounter++;
        productItselfIcrementDecrementOutputText[i].textContent = productCounter;
    });
};