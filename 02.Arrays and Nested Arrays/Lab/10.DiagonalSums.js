function diagonalSums(matrix) {
    let sum1 = 0;
    let sum2 = 0;

    for (let row = 0; row < matrix.length; row++) {
        sum1 += matrix[row][row];
        sum2 += matrix[row][matrix.length - row - 1];
    }

    console.log(`${sum1} ${sum2}`)
}

diagonalSums([[20, 40],
[10, 60]]);

diagonalSums([[3, 5, 17],
[-1, 7, 14],
[1, -8, 89]]);