function solve(array) {
    const result = [];

    for (let el of array) {
        const [command, word] = el.split(' ');

        if (command == 'add') {
            result.push(word);
        }
        else if (command == 'remove') {
            for (let i = 0; i < result.length; i++) {
                if (result[i] == word) {
                    result.splice(i, 1);
                }
            }
        }
        else {
            console.log(result.join(','));
        }
    }
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);
solve(['add pesho', 'add george', 'add peter', 'remove peter', 'print']);