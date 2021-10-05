function validate() {
    const input = document.getElementById('email');

    input.addEventListener('change', onchange);

    function onchange() {
        const pattern = /[a-z]+@[a-z]+.[a-z]+/;
        if (!pattern.test(input.value)) {
            input.classList.add('error');
        }
        else {
            input.classList.remove('error');
        }
    }
}