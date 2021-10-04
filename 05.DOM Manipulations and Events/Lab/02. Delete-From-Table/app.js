function deleteByEmail() {
    const searchText = document.querySelector('input[name="email"]').value;
    const cells = document.querySelectorAll('tbody td');

    let notFound = true;

    for (let i = 0; i < cells.length; i++) {
        if (cells[i].textContent == searchText) {
            cells[i].parentNode.remove();
            document.getElementById('result').textContent = 'Deleted';
            notFound = false;
        }
    }

    if (notFound) {
        document.getElementById('result').textContent = 'Not found.';
    }
}