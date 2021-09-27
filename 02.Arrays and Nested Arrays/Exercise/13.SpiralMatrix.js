function spiralMatrix(rows, cols) {
    var matrix = [];
    for (var row = 0; row < rows; row++) {
        matrix[row] = new Array(cols);
    }

    let counter = 1;

    for (let row = 0; row < matrix.length; row++) {
        for (let col = row; col < matrix.length; col++) {
            if (matrix[row][col]) {
                break;
            }
            matrix[row][col] = counter;
            counter++;
        }

        for (let col = row; col < matrix.length - 1; col++) {
            if (matrix[col+1][matrix.length - row - 1]) {
                break;
            }
            matrix[col+1][matrix.length - row - 1] = counter;
            counter++;
        }

        for (let col = matrix.length - row - 2; col >= 0; col--) {
            if (matrix[matrix.length - row - 1][col]) {
                break;
            }
            matrix[matrix.length - row - 1][col] = counter;
            counter++;
        }

        for (let col = matrix.length - row - 2; col > 0; col--) {
            if (matrix[col][row]) {
                break;
            }
            matrix[col][row] = counter;
            counter++;
        }
    }

    for (let row = 0; row < matrix.length; row++) {
        console.log(matrix[row].join(' '));
    }
}

spiralMatrix(3, 3);
spiralMatrix(5, 5);
