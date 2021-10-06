function encodeAndDecodeMessages() {
    const buttons = document.getElementsByTagName('button');
    const textareas = document.querySelectorAll('textarea');

    for (const button of buttons) {
        button.addEventListener('click', onclick);
    }

    function onclick(ev) {
        let result = '';
        if (ev.target.textContent == 'Encode and send it') {
            for (let i = 0; i < textareas[0].value.length; i++) {
                result += String.fromCharCode(textareas[0].value.charCodeAt(i) + 1);
            }

            textareas[0].value = '';
            textareas[1].value = result;
        }
        else {
            for (let i = 0; i < textareas[1].value.length; i++) {
                result += String.fromCharCode(textareas[1].value.charCodeAt(i) - 1);
            }

            textareas[1].value = result;
        }
    }
}