if (localStorage.getItem('basket')) {
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