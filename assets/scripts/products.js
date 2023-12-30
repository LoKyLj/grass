"use strict";

// get ID from LS
function getBasketLocalStorage() {
    const cartDataJSON = localStorage.getItem('basket');
    return cartDataJSON ? JSON.parse(cartDataJSON) : []; 
}

// post ID to LS
function setBasketLocalStorage(basket) {
    const basketCount = document.querySelector('.cart-count');
    localStorage.setItem('basket', JSON.stringify(basket));
    basketCount.textContent = basket.length;
}

// cards shown count
const COUNT_SHOW_CARDS = 3;


const cards = document.querySelector('.miniShop-list'); 
let shownCards = COUNT_SHOW_CARDS;
let productsData = [];


getProducts();

async function getProducts() {
    if (!productsData.length) {
        const res = await fetch('../../grass/data/grass.json');
        if (!res.ok) {
            throw new Error(res.statusText);
        }
        productsData = await res.json();
    }
    renderStartPage(productsData);
}

function renderStartPage (data) {
    if (!data || !data.length) {
        return alert('Server error, try later!')
    }

    const arrCards = data.slice(0, COUNT_SHOW_CARDS);
    createCards(arrCards);
}

// Render Cards Main
function createCards(data) {
    data.forEach(card => {
        const {id, name, price, img} = card;
        const cardItem  = 
        `
            <div class="miniShop-list__item" data-product-id="${id}">
                <a class="miniShop-item__photo--wrapper" href="./pages/english/catalog/card${id}.html">
                    <img class="miniShop-item__photo" src="./assets/images/${img}" alt="${name}turf picture">
                </a>
                <div class="miniShop-item__info">
                    <p class="miniShop-item__info-name miniShop-item__info-name--eng">${name}</p>
                    <p class="miniShop-item__info-price">${price}€<span class="miniShop-item__info-price--meter">per m²</span></p>
                    <a class="miniShop-item__info-button" href="./pages/english/catalog/card${id}.html">Calculate</a>
                </div>
            </div>
        `;
        cards.insertAdjacentHTML('beforeend', cardItem);
    })
}