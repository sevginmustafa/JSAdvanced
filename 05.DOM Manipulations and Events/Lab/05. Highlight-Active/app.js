function focused() {
    const inputs = document.querySelectorAll('body input');

    for (let input of inputs) {
        input.addEventListener('blur', onblur);
        input.addEventListener('focus', onfocus);
    }

    function onblur(ev) {
        ev.target.parentNode.classList.remove('focused')
    }

    function onfocus(ev) {
        ev.target.parentNode.classList.add('focused')
    }
}