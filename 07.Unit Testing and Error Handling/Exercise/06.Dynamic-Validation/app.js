function validate() {
    const inputField = document.getElementById('email');

    inputField.addEventListener('change', onchange);

    function onchange() {
        const regex = /[a-z]+@[a-z]+.[a-z]/;

        if (regex.test(inputField.value)) {
            inputField.classList.remove('error');
        }
        else {
            inputField.classList.add('error');
        }
    }
}