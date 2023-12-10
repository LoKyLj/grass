"use strict";

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);

    async function formSend (e) {
        e.preventDefault();

        let error = formValidate(form);

        let formData = new FormData(form);

        if (error===0) {
            formButton.classList.add('_sending');
            loaderContainer.classList.add('loader-container--sending');
            let response = await fetch("../../sendCart.php", {
                method: "POST",
                body: formData
            });
            if (response.ok) {
                formButton.classList.remove('_sending');
                loaderContainer.classList.remove('loader-container--sending');
                form.reset();
                openModal();
                // let result = await response.json();
            } else {
            }
        } else {

        }
    }

    const formValidate = (form) => {
        let error = 0;
        let formReq = document.querySelectorAll('._req');

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq [index];
            formRemoveError(input);

            if (input.classList.contains('email')) {
                if (emailTest(input)) { 
                    formAddError(input);
                    error++;
                }
            } else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
                formAddError(input);
                error++;
            } else {
                if (input.value === '') {
                    formAddError(input);
                    error++;
                }
            }
        }
        return error;
    }
    const formAddError = (input) => {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }
    const formRemoveError = (input) => {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }

    const emailTest = (input) => {
        return !/^\w+([\ • -]?\w+) *@\w+([\ - - ]?\w+)*(\ • \w{2,8})+$/.test(input.value);
    }
});

const modal = document.querySelector('.contact-modal');
const openBtn = document.querySelector('.form-button');
const closeBtn = document.querySelectorAll('.closeButton');
const closeBtnBox = document.querySelector('.closeButton-box');
const formButton = document.querySelector('.form-button');
const loaderContainer = document.querySelector('.loader-container');

function openModal(index) {
    modal.classList.remove('modal--hide');
    modal.classList.add('modal--display');
}

function closeModal() {
    modal.classList.add('modal--hide');
}

closeBtn.forEach(element => {
    element.addEventListener('click', closeModal);
});
closeBtnBox.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    if (e.key === "Escape") {
        closeModal();
    }
});