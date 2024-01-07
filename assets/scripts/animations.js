//This function adding an '.active' class to the object with '.revealByLoad' class by loading the page

const revealByLoad = () => {
    const reveals = document.querySelectorAll('.revealByLoad');
    for (let i = 0; i < reveals.length; i++) {
        if (reveals[i]) {
            reveals[i].classList.add('active');
        }
    }
}

// window.addEventListener('load', revealByLoad);
revealByLoad();


//This function adding an '.active' class to the object with '.revealByScroll' class by scrolling the page

const revealByScroll = () => {
    const reveals = document.querySelectorAll('.revealByScroll');
    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 200;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        }
    }
}

window.addEventListener('scroll', revealByScroll);

const revealByScrollDown = () => {
    const reveals = document.querySelectorAll('.revealByScrollDown');
    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 10;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        }
    }
}

window.addEventListener('scroll', revealByScrollDown);