function orbit(array) {
    const [width, height, x, y] = array;

    var matrix = [];
    for (var row = 0; row < width; row++) {
        matrix[row] = new Array(height);
    }

    for (let row = 0; row < width; row++) {
        for (let col = 0; col < height; col++) {
            matrix[row][col] = Math.max(Math.abs(row - x), Math.abs(col - y)) + 1;
        }
    }

    for (let row = 0; row < matrix.length; row++) {
        console.log(matrix[row].join(' '));
    }
}

orbit([5, 5, 0, 0]);
