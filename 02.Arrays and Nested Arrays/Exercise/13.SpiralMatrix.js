function spiralMatrix(rows, cols) {
    var matrix = [];
    for (var row = 0; row < rows; row++) {
        matrix[row] = new Array(cols);
    }

    let counter = 1;

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            matrix[row][col] = counter;
            counter++;
        }

        for (let col = row + 1; col < matrix.length; col++) {
            matrix[col][matrix.length - row] = counter;
            counter++;
        }
    }

    for (let row = 0; row < matrix.length; row++) {
        console.log(matrix[row].join(' '));
    }
}

spiralMatrix(3, 3);
