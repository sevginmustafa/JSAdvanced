function solve() {
    const selectMenuTo = document.getElementById('selectMenuTo');

    selectMenuTo.children[0].value = 'binary';
    selectMenuTo.children[0].textContent = 'Binary';

    const optionElement = document.createElement('option');
    optionElement.value = 'hexadecimal';
    optionElement.textContent = 'Hexadecimal';
    selectMenuTo.appendChild(optionElement);

    const resultButton = document.getElementsByTagName('button')[0];

    resultButton.addEventListener('click', onclick);

    function onclick() {
        if (selectMenuTo.value == "binary") {
            document.getElementById('result').value = Number(document.getElementById('input').value).toString(2);
        } else {
            document.getElementById('result').value = Number(document.getElementById('input').value).toString(16).toUpperCase();
        }
    }
}