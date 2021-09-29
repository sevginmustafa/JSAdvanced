function extractText() {
    const items = document.getElementById('items').children;
    let result = "";
    for (let i = 0; i < items.length; i++) {
        result += items[i].textContent + '\n';
    }

    document.getElementById('result').value = result;
}