class Textbox {
    constructor(selector, regex) {
        this._value = undefined;
        this._elements = document.querySelectorAll(selector);
        this._invalidSymbols = regex;
    }

    get value() {
        return this._value;
    }

    set value(value) {
        this._value = value;
        for (let el of this._elements) {
            el.value = value;
        }
    }

    get elements() {
        return this._elements;
    }

    isValid() {
        for (let el of this._elements) {
            if (this._invalidSymbols.test(el.value)) {
                return false;
            }
        }

        return true;
    }
}

let textbox = new Textbox(".textbox", /[^a-zA-Z0-9]/);
let inputs = document.getElementsByClassName('textbox');

for (let input of inputs) {
    input.addEventListener('change', function () { console.log(textbox.value); });
}