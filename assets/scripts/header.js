const header = document.querySelector('.header');
let lastScroll = 0;
let lastScrollPosition;
let defaultOffset = 200;

const scrollPosition = () => {
    return document.documentElement.scrollTop || window.pageYOffset;
}

const containHide = () => {
    return header.classList.contains('header--hiden');
}

window.addEventListener('scroll', () => {
    if (scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
        header.classList.add('header--hiden');
    } else if (scrollPosition() < lastScroll && containHide()) {
        header.classList.remove('header--hiden');
    }

    lastScroll = scrollPosition();
})

if (localStorage.getItem('basket')) {
    if (JSON.parse(localStorage.getItem('basket')).length) {
        document.querySelector('.cart-count').innerHTML=JSON.parse(localStorage.getItem('basket')).length;
        document.querySelector('.cart-count').style.display = "flex";
    }
} else {
    document.querySelector('.cart-count').style.display = "none";
}

// burger logic

const burgerInput = document.getElementById('menuToggle');
const sidebar = document.querySelector('.sidebar');

const burgerLogic = () => {
    if (burgerInput.checked) {
        sidebar.classList.remove('sidebar--hiden');
        sidebar.classList.add('sidebar--visible');
    } else if (!burgerInput.checked) {
        sidebar.classList.add('sidebar--hiden');
        sidebar.classList.remove('sidebar--visible');
    }
}

const uncheckBurgerInput = () => {
    burgerInput.checked = false;
    sidebar.classList.add('sidebar--hiden');
    sidebar.classList.remove('sidebar--visible');
}