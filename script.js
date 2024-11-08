const productThemselvesContainer = document.querySelector('.products-themselves');

// DISPLAYING DATA

window.addEventListener('DOMContentLoaded', displayData);

async function displayData() {
    const response = await fetch('./data.json');
    const productData = await response.json();

};