function addItem() {
    const liElement = document.createElement('li');
    liElement.textContent = document.getElementById('newItemText').value;

    const aElement = document.createElement('a');
    aElement.href = '#';
    aElement.textContent = '[Delete]';
    aElement.addEventListener('click', delElement);
    liElement.appendChild(aElement);

    document.getElementById('items').appendChild(liElement);

    function delElement(ev) {
        ev.target.parentNode.remove();
    }
}