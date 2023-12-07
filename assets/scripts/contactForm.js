"use strict";

// document.addEventListener('DOMContentLoaded', () => {
//     const form = document.getElementById('form');
//     form.addEventListener('submit', formSend);

//     async function formSend (e) {
//         e.preventDefault();

//         let error = formValidate(error);
//     }

//     const formValidate = (form) => {
//         let error = 0;
//         let formReq = document.querySelectorAll('._req');
//     }
// });

if (document.querySelector('.contact-modal')) {
    document.addEventListener('DOMContentLoaded', function () {
        const modal = document.querySelector('.contact-modal');
        const openBtn = document.querySelector('.form-button');
        const closeBtn = document.querySelectorAll('.closeButton');
        const closeBtnBox = document.querySelector('.closeButton-box');

        function openModal(index) {
            modal.classList.remove('modal--hide');
            modal.classList.add('modal--display');
        }

        openBtn.addEventListener('click', openModal);
        
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
    });
};