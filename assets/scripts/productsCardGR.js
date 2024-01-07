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
    const { img, img2, img3, img4, img5, img6, img7, img8, img9} = data;
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
    <div class="gallery-item gallery-item--hiden">
        <img class="gallery-img" src="../../../assets/images/${img5}" alt="grass-example">
    </div>
    <div class="gallery-item gallery-item--hiden">
        <img class="gallery-img" src="../../../assets/images/${img6}" alt="grass-example">
    </div>
    <div class="gallery-item gallery-item--hiden">
        <img class="gallery-img" src="../../../assets/images/${img7}" alt="grass-example">
    </div>
    <div class="gallery-item gallery-item--hiden">
        <img class="gallery-img" src="../../../assets/images/${img8}" alt="grass-example">
    </div>
    <div class="gallery-item gallery-item--hiden">
        <img class="gallery-img" src="../../../assets/images/${img9}" alt="grass-example">
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
        <p class="calculations-info__price"><span class="calculationsPrice" id="calculationsPrice">${price}</span>€<span class="calculations-info__price--meter greekLocalization">ανά m²</span></p>
    `;
    calculationsContainer.insertAdjacentHTML('afterbegin', galleryItem);

    document.querySelector('.calculationsPriceStorage').innerHTML = price;
    document.querySelector('.calculationsAreaStorage').innerHTML = 1;
}

// Push Product to basket Modals

// Add Modal
const addProductModal = document.querySelector('.productAdd-modal');
const addProductCloseBtn = document.querySelectorAll('.addProductCloseButton');
const addProductCloseBtnBox = document.querySelector('.addProductCloseButton-box');

function addProductOpenModal(index) {
    addProductModal.classList.remove('productAdd-modal--hide');
    addProductModal.classList.add('productAdd-modal--display');
}

function addProductCloseModal() {
    addProductModal.classList.add('productAdd-modal--hide');
}

addProductCloseBtn.forEach(element => {
    element.addEventListener('click', addProductCloseModal);
});
addProductCloseBtnBox.addEventListener('click', addProductCloseModal);

document.addEventListener('keydown', function (e) {
    if (e.key === "Escape") {
        addProductCloseModal();
    }
});

//Change Modal
const changeProductModal = document.querySelector('.productChange-modal');
const changeProductCloseBtn = document.querySelectorAll('.changeProductCloseButton');
const changeProductCloseBtnBox = document.querySelector('.changeProductCloseButton-box');

function changeProductOpenModal(index) {
    changeProductModal.classList.remove('productChange-modal--hide');
    changeProductModal.classList.add('productChange-modal--display');
}

function changeProductCloseModal() {
    changeProductModal.classList.add('productChange-modal--hide');
}

changeProductCloseBtn.forEach(element => {
    element.addEventListener('click', changeProductCloseModal);
});
changeProductCloseBtnBox.addEventListener('click', changeProductCloseModal);

document.addEventListener('keydown', function (e) {
    if (e.key === "Escape") {
        changeProductCloseModal();
    }
});

// Add Product to Basket

const addProductButton = document.querySelector('.calculations-info__button');
addProductButton.addEventListener('click', addProductBasket)
function addProductBasket(event) {
    if (!addProductButton) return;
    const productWidthNode = document.querySelectorAll('.calculations-info__item-radiobutton');
    const productWidthList = Array.from(productWidthNode);

    const productName = document.querySelector('.calculations-info__name').innerHTML;
    const productId = document.querySelector('body').dataset.productId-0;
    const productPrice = document.querySelector('.calculationsPrice').innerHTML-0;
    const productLength = document.querySelector('.calculations-info__item-select').value-0;
    const productWidth = productWidthList.find(element => element.checked).value-0;
    const productQuantity = document.querySelector('.calculations-info__item-quantity--text').value-0;
    const productTotal = document.querySelector('.calculationsPriceStorage').innerHTML-0;
    const productArea = document.querySelector('.calculationsAreaStorage').innerHTML-0;

    const productObject = {
        id: productId,
        name: productName,
        price: productPrice,
        length: productLength,
        width: productWidth,
        quantity: productQuantity,
        area: productArea,
        total: productTotal
    }

    let parsedBasket;

    if (localStorage.getItem('basket')) {
        parsedBasket = JSON.parse(localStorage.getItem('basket'));

        if (parsedBasket.some(obj => obj.id === productId)) {
            parsedBasket.splice(parsedBasket.indexOf(parsedBasket.find(obj => obj.id === productId)), 1);
            const setProductToBasket = [];
            setProductToBasket.push(productObject)
            localStorage.setItem('basket', JSON.stringify(setProductToBasket));
            changeProductOpenModal();
        } else if (!parsedBasket.some(obj => obj.id === productId)) {
            parsedBasket.push(productObject);
            localStorage.setItem('basket', JSON.stringify(parsedBasket));
            addProductOpenModal();
        }
    } else if (!localStorage.getItem('basket')) {
            const setProductToBasket = [];
            setProductToBasket.push(productObject)
            localStorage.setItem('basket', JSON.stringify(setProductToBasket));
            addProductOpenModal();
    }

    // const basket = getBasketLocalStorage();
    document.querySelector('.cart-count').innerHTML=JSON.parse(localStorage.getItem('basket')).length;
    document.querySelector('.cart-count').style.display = "flex";
}

// Render Cards Main
function createCards(data) {
    data.forEach(card => {
        const {id, name, price, img} = card;
        const cardItem  = 
        `
            <div class="miniShop-list__item revealByScrollDown" data-product-id="${id}">
                <a class="miniShop-item__photo--wrapper" href="../../../pages/greek/catalog/${name}.html">
                    <img class="miniShop-item__photo" src="../../../assets/images/${img}" alt="${name}turf picture">
                </a>
                <div class="miniShop-item__info">
                    <p class="miniShop-item__info-name miniShop-item__info-name--eng">${name}</p>
                    <p class="miniShop-item__info-price">${price}€<span class="miniShop-item__info-price--meter greekLocalization">ανά m²</span></p>
                    <a class="miniShop-item__info-button greekLocalization" href="../../../pages/greek/catalog/${name}.html">Αγοράστε τώρα</a>
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