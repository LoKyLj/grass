"use strict";

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);

    async function formSend (e) {
        e.preventDefault();

        let error = formValidate(error);
    }

    const formValidate = (form) => {
        let error = 0;
        let formReq = document.querySelectorAll('._req');
    }
});