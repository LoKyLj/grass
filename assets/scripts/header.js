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

