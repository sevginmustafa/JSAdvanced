function biggestElement(matrix) {
    let temp = Math.max(...matrix[0]);

    for (let row = 1; row < matrix.length; row++) {
        if (temp < Math.max(...matrix[row])) {
            temp = Math.max(...matrix[row]);
        }
    }

    return temp;
}

console.log(biggestElement([[20, 50, 10],
[8, 33, 145]]));

console.log(biggestElement([[3, 5, 7, 12],
[-1, 4, 33, 2],
[8, 3, 0, 4]]));