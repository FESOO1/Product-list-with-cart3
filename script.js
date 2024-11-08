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
const cartItselfProductsThemselves = document.querySelector('.cart-itself-products-themselves');
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

        // DISPLAYING THE PRODUCTS CONTAINER IN THE CART
        cartItselfEmptyContainer.style.display = 'none';
        cartItselfProductContainer.style.display = 'flex';

        cartItselfProductsThemselves.innerHTML += `
            <div class="cart-itself-product-itself">
                <div class="cart-itself-product-itself-left">
                    <h4 class="cart-itself-product-itself-left-text">Classic Tiramisu</h4>
                    <div class="cart-itself-product-itself-left-inner">
                        <h5 class="cart-itself-product-itself-left-inner-times-text">1x</h5>
                        <h5 class="cart-itself-product-itself-left-inner-times-price">$5.50</h5>
                        <h5 class="cart-itself-product-itself-left-inner-times-overall-price">$5.50</h5>
                    </div>
                </div>
                <div class="cart-itself-product-itself-right">
                    <button class="cart-itself-product-itself-right-delete-button">
                        <svg class="cart-itself-product-itself-right-delete-button-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                        <path d="M19.0005 4.99988L5.00049 18.9999M5.00049 4.99988L19.0005 18.9999" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    </button>
                </div>
            </div>
            <hr class="cart-itself-product-divider">
        `;
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