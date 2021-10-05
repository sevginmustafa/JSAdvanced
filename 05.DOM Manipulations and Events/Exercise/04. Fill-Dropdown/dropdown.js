function addItem() {
    const newItemText = document.getElementById('newItemText');
    const newItemValue = document.getElementById('newItemValue');

    const optionElement = document.createElement('option');
    optionElement.value = newItemValue.value;
    optionElement.textContent = newItemText.value;

    document.getElementById('menu').appendChild(optionElement);

    newItemText.value='';
    newItemValue.value='';
}