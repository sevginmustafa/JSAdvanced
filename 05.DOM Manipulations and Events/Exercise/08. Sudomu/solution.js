function solve() {
    const cells = document.querySelectorAll('input[type="number"]');;
    const buttons = document.querySelectorAll('button');
    const table = document.querySelector('table');
    const checkParagraph = document.querySelector('#check p');

    buttons[0].addEventListener('click', check);
    buttons[1].addEventListener('click', clear);

    function check() {
        let isWin = true;
        const matrix = [];
        let temp = [];

        for (let i = 0; i < 3; i++) {
            matrix[i] = new Array(3);
        }

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                matrix[i][j] = cells[i * 3 + j].value;
            }
        }

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (!temp.includes(matrix[i][j])) {
                    temp.push(matrix[i][j]);
                }
            }

            if (temp.length < 3) {
                isWin = false;
            }
            temp.splice(0);
        }

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (!temp.includes(matrix[j][i])) {
                    temp.push(matrix[j][i]);
                }
            }

            if (temp.length < 3) {
                isWin = false;
            }
            temp.splice(0);
        }

        if (isWin) {
            table.style.border = '2px solid green';
            checkParagraph.textContent = 'You solve it! Congratulations!';
            checkParagraph.style.color = 'green';
        }
        else {
            table.style.border = '2px solid red';
            checkParagraph.textContent = 'NOP! You are not done yet...';
            checkParagraph.style.color = 'red';
        }
    }

    function clear() {
        for (let cell of cells) {
            cell.value = '';
        }

        table.style.border = '';
        checkParagraph.textContent = '';
        checkParagraph.style.color = '';
    }
}