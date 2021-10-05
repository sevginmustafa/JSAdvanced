function attachEventsListeners() {
    const buttons = document.querySelectorAll('[type="button"]');
    const inputs = document.querySelectorAll('[type="text"]');
    let arr;

    for (let button of buttons) {
        button.addEventListener('click', onclick);
    }

    function onclick(ev) {
        const filledInput = ev.target.parentNode.querySelector('[type="text"]');

        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i] == filledInput) {
                const value = Number(inputs[i].value);
                switch (i) {
                    case 0: arr = [value, value * 24, value * 24 * 60, value * 24 * 60 * 60]; break;
                    case 1: arr = [value / 24, value, value * 60, value * 60 * 60]; break;
                    case 2: arr = [value / 24 / 60, value / 60, value, value * 60]; break;
                    case 3: arr = [value / 24 / 60 / 60, value / 60 / 60, value / 60, value]; break;
                }

                break;
            }
        }

        for (let i = 0; i < inputs.length; i++) {
            inputs[i].value = arr[i];
        }
    }
}
