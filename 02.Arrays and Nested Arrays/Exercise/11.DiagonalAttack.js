function diagonalAttack(matrix) {
    function printMatrix(matrix) {
        for (let row = 0; row < matrix.length; row++) {
            console.log(matrix[row].join(' '));
        }
    }

    matrix = matrix.map(x => x.split(' ').map(x => parseInt(x)));

    let diagonal1 = 0;
    let diagonal2 = 0;

    for (let row = 0; row < matrix.length; row++) {
        diagonal1 += Number(matrix[row][row]);
        diagonal2 += Number(matrix[row][matrix.length - row - 1]);
    }

    if (diagonal1 != diagonal2) {
        printMatrix(matrix);
    }
    else {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                if (row != col && row + col != matrix.length - 1) {
                    matrix[row][col] = diagonal1;
                }
            }
        }

        printMatrix(matrix);
    }
}

diagonalAttack(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
);
diagonalAttack(['1 1 1',
    '1 1 1',
    '1 1 0']
);