function orbit(array) {
    const [width, height, x, y] = array;

    var matrix = [];
    for (var row = 0; row < width; row++) {
        matrix[row] = new Array(height);
    }

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            let distance = Math.sqrt(Math.pow(row - x, 2) + Math.pow(col - y, 2));

            if (distance - width <= 1) {
                matrix[row][col] = Math.floor(distance);
            }
        }
    }

    for (let row = 0; row < matrix.length; row++) {
        console.log(matrix[row].join(' '));
    }
}

orbit([5, 5, 0, 0]);