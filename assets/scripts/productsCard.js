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

const cardID = document.querySelector('body').dataset.productId - 0;
const galleryContainer = document.querySelector('.gallery');
const calculationsContainer = document.querySelector('.calculations-info');
const cards = document.querySelector('.miniShop-list'); 
let shownCards = COUNT_SHOW_CARDS;
let productsData = [];


getProducts();

async function getProducts() {
    if (!productsData.length) {
        const res = await fetch('../../../data/grass.json');
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

    createGallery(productsData[cardID-1]);
    createCalculations(productsData[cardID-1]);

    const copiedArr = data;
    const filtredArr = copiedArr.filter(elem => elem.id !== cardID);
    const arrCards = filtredArr.slice(0, COUNT_SHOW_CARDS);
    createCards(arrCards);
}

// Render Gallery Container

function createGallery(data) {
    const { img, img2, img3, img4 } = data;
    const galleryItem = 
    `
    <div class="gallery-item gallery-item--horizontal">
        <img class="gallery-img" src="../../../assets/images/${img}" alt="grass-example">
    </div>
    <div class="gallery-item">
        <img class="gallery-img" src="../../../assets/images/${img2}" alt="grass-example">
    </div>
    <div class="gallery-item">
        <img class="gallery-img" src="../../../assets/images/${img3}" alt="grass-example">
    </div>
    <div class="gallery-item">
        <img class="gallery-img" src="../../../assets/images/${img4}" alt="grass-example">
    </div>
    `;
    galleryContainer.insertAdjacentHTML('beforeend', galleryItem);
}

// Render Calculations

function createCalculations(data) {
    const { name, price } = data;
    const galleryItem = 
    `
        <p class="calculations-info__name calculations-info__name--eng">${name}</p>
        <p class="calculations-info__price"><span id="calculationsPrice">${price}</span>€<span class="calculations-info__price--meter">per m²</span></p>
    `;
    calculationsContainer.insertAdjacentHTML('afterbegin', galleryItem);
}

// Render Cards Main
function createCards(data) {
    data.forEach(card => {
        const {id, name, price, img} = card;
        const cardItem  = 
        `
            <div class="miniShop-list__item" data-product-id="${id}">
                <a class="miniShop-item__photo--wrapper" href="../../../pages/english/catalog/card${id}.html">
                    <img class="miniShop-item__photo" src="../../../assets/images/${img}" alt="${name}turf picture">
                </a>
                <div class="miniShop-item__info">
                    <p class="miniShop-item__info-name miniShop-item__info-name--eng">${name}</p>
                    <p class="miniShop-item__info-price">${price}€<span class="miniShop-item__info-price--meter">per m²</span></p>
                    <a class="miniShop-item__info-button" href="../../../pages/english/catalog/card${id}.html">Calculate</a>
                </div>
            </div>
        `;
        cards.insertAdjacentHTML('beforeend', cardItem);
    })
}

function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
    script.onload = callback;
    document.head.appendChild(script);
}

loadScript('../../../assets/scripts/gallery.js');
loadScript('../../../assets/scripts/calculator.js');

