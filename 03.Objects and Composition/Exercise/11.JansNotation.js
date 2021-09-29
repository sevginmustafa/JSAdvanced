function solve(arr) {
    const result = [];

    for (let el of arr) {
        let num = parseFloat(el);

        if (!num) {
            if (result.length <= 1) {
                console.log('Error: not enough operands!');
                return;
            }
            else {
                if (el == '+') {
                    result.splice(result.length - 2, 2, result[result.length - 2] + result[result.length - 1])
                }
                else if (el == '-') {
                    result.splice(result.length - 2, 2, result[result.length - 2] - result[result.length - 1])
                }
                else if (el == '*') {
                    result.splice(result.length - 2, 2, result[result.length - 2] * result[result.length - 1])
                }
                else {
                    result.splice(result.length - 2, 2, result[result.length - 2] / result[result.length - 1])
                }
            }
        }
        else {
            result.push(num);
        }
    }

    if (result.length == 1) {
        console.log(result[0]);
    }
    else {
        console.log('Error: too many operands!');
    }
}

solve([3, 4, '+']);
solve([5, 3, 4, '*', '-']);
solve([7, 33, 8, '-']);
solve([15, '/'])