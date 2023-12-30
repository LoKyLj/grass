if (localStorage.getItem('basket')) {
    const parsedBasketArray = JSON.parse(localStorage.getItem('basket'));
    for (let i = 0; i < parsedBasketArray.length; i++) {
        const element = parsedBasketArray[i];
        const { id, name, price, length, width, quantity, total, area } = element;
        const cartItem = 
        `
            <div class="cartContact-table__item cartContact-product" id="product${id}" data-product-id="${id}">
                <div class="cartContact-product__image--container">
                    <a class="cartContact-product__image-wrapper" href="../english/catalog/card${id}.html">
                        <img class="cartContact-product__image" src="../../assets/images/products/${name}/01.webp" alt="turf photo">
                    </a>
                    <p class="calculationsPrice">${price}</p>
                    <a class="cartContact-product__name" href="../english/catalog/card${id}.html">${name}</a>
                    <div class="closeButton cartContact-closeButton" id="deleteProductButton${id}">
                        <svg class="closeButton-pic" width="16" height="16" fill="gray" viewBox="0 0 16 16">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z">
                            </path>
                        </svg>
                    </div>
                </div>
                <div class="cartContact-product__item calculations-info__item-container">
                    <div class="calculations-info__item-radiobuttons cartContact-product__width">
                        <input class="calculations-info__item-radiobutton cartContact-product__width-radiobutton cartContact-product__item-button" type="radio" name="width${id}" value="2" id="2m${id}">
                        <label class="calculations-info__item-label cartContact-product__width-label" for="2m${id}">2 m</label>
                        <input class="calculations-info__item-radiobutton cartContact-product__width-radiobutton cartContact-product__item-button" type="radio" name="width${id}" value="4" id="4m${id}">
                        <label class="calculations-info__item-label cartContact-product__width-label" for="4m${id}">4 m</label>
                    </div>
                </div>
                <div class="cartContact-product__item cartContact-product__length calculations-info__item-select--wrapper">
                    <select class="cartContact-product__length-select calculations-info__item-select cartContact-product__item-button" id="calculationsLength">
                        <option class="calculations-info__item-option" value="0.5">0.5 m</option>
                        <option class="calculations-info__item-option" value="1">1 m</option>
                        <option class="calculations-info__item-option" value="1.5">1.5 m</option>
                        <option class="calculations-info__item-option" value="2">2 m</option>
                        <option class="calculations-info__item-option" value="2.5">2.5 m</option>
                        <option class="calculations-info__item-option" value="3">3 m</option>
                        <option class="calculations-info__item-option" value="3.5">3.5 m</option>
                        <option class="calculations-info__item-option" value="4">4 m</option>
                        <option class="calculations-info__item-option" value="4.5">4.5 m</option>
                        <option class="calculations-info__item-option" value="5">5 m</option>
                        <option class="calculations-info__item-option" value="5.5">5.5 m</option>
                        <option class="calculations-info__item-option" value="6">6 m</option>
                        <option class="calculations-info__item-option" value="6.5">6.5 m</option>
                        <option class="calculations-info__item-option" value="7">7 m</option>
                        <option class="calculations-info__item-option" value="7.5">7.5 m</option>
                        <option class="calculations-info__item-option" value="8">8 m</option>
                        <option class="calculations-info__item-option" value="8.5">8.5 m</option>
                        <option class="calculations-info__item-option" value="9">9 m</option>
                        <option class="calculations-info__item-option" value="9.5">9.5 m</option>
                        <option class="calculations-info__item-option" value="10">10 m</option>
                        <option class="calculations-info__item-option" value="10.5">10.5 m</option>
                        <option class="calculations-info__item-option" value="11">11 m</option>
                        <option class="calculations-info__item-option" value="11.5">11.5 m</option>
                        <option class="calculations-info__item-option" value="12">12 m</option>
                        <option class="calculations-info__item-option" value="12.5">12.5 m</option>
                        <option class="calculations-info__item-option" value="13">13 m</option>
                        <option class="calculations-info__item-option" value="13.5">13.5 m</option>
                        <option class="calculations-info__item-option" value="14">14 m</option>
                        <option class="calculations-info__item-option" value="14.5">14.5 m</option>
                        <option class="calculations-info__item-option" value="15">15 m</option>
                        <option class="calculations-info__item-option" value="15.5">15.5 m</option>
                        <option class="calculations-info__item-option" value="16">16 m</option>
                        <option class="calculations-info__item-option" value="16.5">16.5 m</option>
                        <option class="calculations-info__item-option" value="17">17 m</option>
                        <option class="calculations-info__item-option" value="17.5">17.5 m</option>
                        <option class="calculations-info__item-option" value="18">18 m</option>
                        <option class="calculations-info__item-option" value="18.5">18.5 m</option>
                        <option class="calculations-info__item-option" value="19">19 m</option>
                        <option class="calculations-info__item-option" value="19.5">19.5 m</option>
                        <option class="calculations-info__item-option" value="20">20 m</option>
                        <option class="calculations-info__item-option" value="20.5">20.5 m</option>
                        <option class="calculations-info__item-option" value="21">21 m</option>
                        <option class="calculations-info__item-option" value="21.5">21.5 m</option>
                        <option class="calculations-info__item-option" value="22">22 m</option>
                        <option class="calculations-info__item-option" value="22.5">22.5 m</option>
                        <option class="calculations-info__item-option" value="23">23 m</option>
                        <option class="calculations-info__item-option" value="23.5">23.5 m</option>
                        <option class="calculations-info__item-option" value="24">24 m</option>
                        <option class="calculations-info__item-option" value="24.5">24.5 m</option>
                        <option class="calculations-info__item-option" value="25">25 m</option>
                    </select>
                    <svg class="cartContact-product__length-select--arrow calculations-info__item-select--arrow" viewBox="0 0 16 17" fill="none">
                        <path d="M13.28 6.46655L8.9333 10.8132C8.41997 11.3266 7.57997 11.3266 7.06664 10.8132L2.71997 6.46655" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="cartContact-product__item calculations-info__item cartContact-product__item cartContact-product__item-quantity--wrapper">
                    <div class="calculations-info__item-quantity cartContact-product__item-quantity">
                        <svg class="calculations-info__item-quantity--minus cartContact-product__item-quantity--minus minus" viewBox="0 0 14 14" fill="none">
                            <path d="M3.5 7H10.5" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <input class="calculations-info__item-quantity--text cartContact-product__item-quantity--text cartContact-product__item-button" id="calculationsQuantity" type="number" value="${quantity}" min="1" max="10">
                        <svg class="calculations-info__item-quantity--plus cartContact-product__item-quantity--plus plus" viewBox="0 0 14 14" fill="none">
                            <path d="M3.5 7H10.5" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M7 10.5V3.5" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <p class="cartContact-product__item calculations-info__cost cartContact-product__info-cost">
                    <span class="calculations-info__cost-number"><span class="calculationsPriceStorage" id="calculationsPriceStorage">${total}</span>€</span>
                    <span class="calculations-info__cost-number"><span class="calculationsAreaStorage" id="calculationsAreaStorage">${area}</span>m²</span>
                </p>
            </div>
        `;
        document.querySelector('.cartContact-table__item--wrapper').insertAdjacentHTML('beforeend', cartItem);
        const foundedProduct = document.getElementById(`product${id}`)

        // delete item from LS and HTML

        const deleteProductButton = document.getElementById(`deleteProductButton${id}`);
        deleteProductButton.addEventListener('click', () => {
            foundedProduct.classList.add('cartContact-product--deleting');
            const deleteDiv = () => {
                foundedProduct.remove();

                const parsedBasket = JSON.parse(localStorage.getItem('basket'));
                parsedBasket.splice(parsedBasket.indexOf(parsedBasket.find((elem) => elem.name === name)), 1);
                if (parsedBasket.length) {
                    localStorage.setItem('basket', JSON.stringify(parsedBasket));
                } else {
                    localStorage.clear();
                }

                const subtotal = document.querySelector('.cartContact-subtotal__price--inner');
                if (document.querySelector('.cartContact-product')) {
                    const totalStorages = document.querySelectorAll('.calculationsPriceStorage');
                    let sum = 0;
                    for (let index = 0; index < totalStorages.length; index++) {
                        const element = totalStorages[index];
                        sum = Math.round((sum + Number(element.innerHTML))*100)/100;
                    }
                    subtotal.innerHTML = sum;
                } else {
                    subtotal.innerHTML = 0; 
                }

                if (localStorage.getItem('basket')) {
                    if (JSON.parse(localStorage.getItem('basket')).length) {
                        document.querySelector('.cart-count').innerHTML=JSON.parse(localStorage.getItem('basket')).length;
                        document.querySelector('.cart-count').style.display = "flex";
                    }
                } else if (!JSON.parse(localStorage.getItem('basket'))) {
                    document.querySelector('.cart-count').style.display = "none";
                    document.querySelector('.cartContact-table--full').style.display = 'none';
                    document.querySelector('.cartContact-table--empty').style.display = 'flex';
                } else if (!JSON.parse(localStorage.getItem('basket')).length) {
                    document.querySelector('.cartContact-table--full').style.display = 'none';
                    document.querySelector('.cart-count').style.display = "none";
                    document.querySelector('.cartContact-table--empty').style.display = 'flex';
                }
            };
            setTimeout(deleteDiv, 250);
        })

        // insert width and length based on basket item in LS

        const widthInputs = Array.from(foundedProduct.querySelectorAll('.cartContact-product__width-radiobutton'));
        widthInputs.find((option) => option.value-0 === width).checked = true;

        const lengthInputs = Array.from(foundedProduct.querySelectorAll('.calculations-info__item-option'));
        lengthInputs.find((option) => option.value-0 === length).selected = true;

        // update subtotal

        const subtotal = document.querySelector('.cartContact-subtotal__price--inner');
        const totalStorages = document.querySelectorAll('.calculationsPriceStorage');
        let sum = 0;
        for (let index = 0; index < totalStorages.length; index++) {
            const element = totalStorages[index];
            sum = Math.round((sum + Number(element.innerHTML))*100)/100;
        }
        subtotal.innerHTML = sum;
    }

    document.querySelector('.cartContact-table--full').style.display = 'flex';
} else {
    document.querySelector('.cartContact-table--empty').style.display = 'flex';
}

function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
    script.onload = callback;
    document.head.appendChild(script);
}

loadScript('../../../assets/scripts/cartCalculator.js');