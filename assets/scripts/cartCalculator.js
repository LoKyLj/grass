const minusButtons = document.querySelectorAll('.minus');
for (let i = 0; i < minusButtons.length; i++) {
    minusButtons[i].addEventListener('click', function() {
        let input = this.parentNode.querySelector('input');
        let count = parseInt(input.value) - 1;
        count = count < 1 ? 1 : count;
        input.value = count;
        input.dispatchEvent(new Event('change'));
        return false;
    });
}

const plusButtons = document.querySelectorAll('.plus');
for (let i = 0; i < plusButtons.length; i++) {
    plusButtons[i].addEventListener('click', function() {
        let input = this.parentNode.querySelector('input');
        let count = parseInt(input.value) + 1;
        count = count > 10 ? 10 : count;
        input.value = count;
        input.dispatchEvent(new Event('change'));
        return false;
    });
}

let inputs = document.querySelectorAll("input");

inputs.forEach(function(input) {
    input.addEventListener("keydown", function() {
      // Save old value.
        if (!input.value || (parseInt(input.value) <= 10 && parseInt(input.value) >= 0));
        input.dataset.old = input.value;
    });

    input.addEventListener("keyup", function() {
        // Check correct, else revert back to old value.
        if (!input.value || (parseInt(input.value) <= 10 && parseInt(input.value) >= 0));
        else
        input.value = input.dataset.old;
    });
});

// calculate price after load

const productsSpecs = document.querySelectorAll('.cartContact-product__item-button');
productsSpecs.forEach(function calculateCostCart (button) {
    button.addEventListener("change", function() {
        const calculationsPrice = button.closest('.cartContact-product').querySelector('.calculationsPrice').innerHTML-0;
        const calculationsQuantity = button.closest('.cartContact-product').querySelector('.calculations-info__item-quantity--text').value-0;
        const calculationsLength = button.closest('.cartContact-product').querySelector('.cartContact-product__length-select').value-0;
        const calculationsWidthButtons = button.closest('.cartContact-product').querySelectorAll('.calculations-info__item-radiobutton');
        let calculationsWidth;
        for (let index = 0; index < calculationsWidthButtons.length; index++) {
            const element = calculationsWidthButtons[index];
            if (element.checked) {
                calculationsWidth = element.value-0;
            }
        }
        const calculationsPriceStorage = button.closest('.cartContact-product').querySelector('.calculationsPriceStorage');
        const calculationsAreaStorage = button.closest('.cartContact-product').querySelector('.calculationsAreaStorage');

        calculationsPriceStorage.innerHTML = Math.round(calculationsPrice*calculationsWidth*calculationsLength*calculationsQuantity*100)/100;
        calculationsAreaStorage.innerHTML = Math.round(calculationsWidth*calculationsLength*calculationsQuantity*100)/100;

        const subtotal = document.querySelector('.cartContact-subtotal__price--inner');
        const totalStorages = document.querySelectorAll('.calculationsPriceStorage');
        let sum = 0;
        for (let index = 0; index < totalStorages.length; index++) {
            const element = totalStorages[index];
            sum = Math.round((sum + Number(element.innerHTML))*100)/100;
        }
        subtotal.innerHTML = sum;
    })
})


// const calculateCost = () => {
//     let widthValue;
//     for (let index = 0; index < calculationsWidth.length; index++) {
//         const element = calculationsWidth[index];
        
//         if (element.checked) {
//             widthValue = element.value;
//         }
//     }

//     let sum = calculationsLength.value*widthValue*calculationsQuantity.value*calculationsPrice.innerHTML;
//     calculationsPriceStorage.innerHTML = sum;

//     let area = calculationsLength.value*widthValue*calculationsQuantity.value;
//     calculationsAreaStorage.innerHTML = area;
// }