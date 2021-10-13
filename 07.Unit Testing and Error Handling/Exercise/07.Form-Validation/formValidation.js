function validate() {
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');
    const company = document.getElementById('company');
    company.addEventListener('change', onchange);
    const companyInfo = document.getElementById('companyInfo');
    const companyNumber = document.getElementById('companyNumber');
    document.getElementById('submit').addEventListener('click', onclick);

    function onclick(ev) {
        let isValid = true;
        ev.preventDefault();

        const usernameRegex = /^[A-Za-z0-9]{3,20}$/;
        const emailRegex = /^[^@.]+@[^@]*\.[^@]*$/;
        const passwordRegex = /^[\w]{5,15}$/;

        if (!usernameRegex.test(username.value)) {
            username.style.borderColor = 'red';
        }
        else {
            username.style.border = 'none';
        }

        if (!emailRegex.test(email.value)) {
            email.style.borderColor = 'red';
        }
        else {
            email.style.border = 'none';
        }

        if (!passwordRegex.test(password.value) ||
            !passwordRegex.test(confirmPassword.value) ||
            password.value != confirmPassword.value) {
            password.style.borderColor = 'red';
            confirmPassword.style.borderColor = 'red';
        }
        else {
            password.style.border = 'none';
            confirmPassword.style.border = 'none';
        }

        if (companyNumber.value < 1000 || companyNumber.value > 9999) {
            companyNumber.style.borderColor = 'red';
        }
        else {
            companyNumber.style.border = 'none';
        }

        const inputs = document.getElementsByTagName('input');

        for (let i = 0; i < inputs.length - 1; i++) {
            if (inputs[i].style.borderColor == 'red') {
                isValid = false;
            }
        }

        if (company.checked) {

            if (inputs[inputs.length - 1].style.borderColor == 'red') {
                isValid = false;
            }
        }

        if (isValid) {
            document.getElementById('valid').style.display = 'block';
        }
        else {
            document.getElementById('valid').style.display = 'none';
        }
    }

    function onchange() {
        if (company.checked) {
            companyInfo.style.display = 'block';
        }
        else {
            companyInfo.style.display = 'none';
        }
    }
}