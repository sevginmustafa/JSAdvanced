function ticTacToe(moves) {
    function printMatrix(matrix) {
        for (let row = 0; row < matrix.length; row++) {
            console.log(matrix[row].join('\t'));
        }
    }

    const dashboard = [[false, false, false],
    [false, false, false],
    [false, false, false]];

    let currentPlayer = 'X';
    let succesMoves = 0;

    for (let i = 0; i < moves.length; i++) {
        const [x, y] = moves[i].split(' ');

        if (dashboard[x][y]) {
            console.log('This place is already taken. Please choose another!');
            continue;
        }
        else {
            succesMoves++;
            dashboard[x][y] = currentPlayer;

            currentPlayer = currentPlayer == 'X' ? 'O' : 'X';
        }

        //check rows
        for (let row = 0; row < dashboard.length; row++) {
            let currElement = dashboard[row][0];
            if (!currElement) {
                continue;
            }

            let counter = 1;

            for (let col = 1; col < dashboard.length; col++) {
                if (dashboard[row][col] != currElement) {
                    break;
                }

                counter++;
            }

            if (counter == 3) {
                console.log(`Player ${currElement} wins!`);
                printMatrix(dashboard);
                return;
            }
        }

        //check cols
        for (let row = 0; row < dashboard.length; row++) {
            let currElement = dashboard[0][row];
            if (!currElement) {
                continue;
            }

            let counter = 1;

            for (let col = 1; col < dashboard.length; col++) {
                if (dashboard[col][row] != currElement) {
                    break;
                }

                counter++;
            }

            if (counter == 3) {
                console.log(`Player ${currElement} wins!`);
                printMatrix(dashboard);
                return;
            }
        }

        //check diagonals
        let result1 = '';
        let result2 = '';

        for (let row = 0; row < dashboard.length; row++) {
            result1 += dashboard[row][row];
            result2 += dashboard[row][dashboard.length - row - 1];
        }

        if (result1 == 'XXX' || result1 == "OOO") {
            console.log(`Player ${result1[0]} wins!`);
            printMatrix(dashboard);
            return;
        }
        if (result2 == 'XXX' || result2 == "OOO") {
            console.log(`Player ${result2[0]} wins!`);
            printMatrix(dashboard);
            return;
        }

        if (succesMoves == 9) {
            console.log('The game ended! Nobody wins :(');
            printMatrix(dashboard);
            return;
        }
    }

}

ticTacToe(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 1",
    "1 2",
    "2 2",
    "2 1",
    "0 0"]);
ticTacToe(["0 0",
    "0 0",
    "1 1",
    "0 1",
    "1 2",
    "0 2",
    "2 2",
    "1 2",
    "2 2",
    "2 1"]);
ticTacToe(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 2",
    "1 1",
    "2 1",
    "2 2",
    "0 0"]);