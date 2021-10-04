function generateReport() {
    const checkers = document.querySelectorAll('thead th');
    const checkedIndexes = [];
    const rows = document.querySelectorAll('tbody tr');
    const result = [];


    for (let i = 0; i < checkers.length; i++) {
        if (checkers[i].children[0].checked) {
            checkedIndexes.push(i);
        }
    }

    for (let i = 0; i < rows.length; i++) {
        const obj = {};
        for (let j = 0; j < checkedIndexes.length; j++) {
            const inputName = checkers[checkedIndexes[j]].children[0].name;
            obj[inputName] = rows[i].children[checkedIndexes[j]].textContent;
        }
        result.push(obj);
    }

    document.getElementById('output').value = JSON.stringify(result, null, 2);
}