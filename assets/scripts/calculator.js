const quantityNumber = document.querySelector('.calculations-info__item-quantity--text');
const lengthSelect = document.querySelector('.calculations-info__item-select');

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

var inputs = document.querySelectorAll("input");

inputs.forEach(function(input) {
    input.addEventListener("keydown", function() {
      // Save old value.
        if (!input.value || (parseInt(input.value) <= 10 && parseInt(input.value) >= 0))
        input.dataset.old = input.value;
    });

input.addEventListener("keyup", function() {
      // Check correct, else revert back to old value.
        if (!input.value || (parseInt(input.value) <= 10 && parseInt(input.value) >= 0))
        ;
        else
        input.value = input.dataset.old;
    });
});