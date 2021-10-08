function solve(input) {
    const result = {};

    for (let el of input) {
        const tokens = el.split(' ');
        const command = tokens[0];
        const name = tokens[1];

        if (command == 'create') {
            if (tokens.length == 2) {
                result[name] = {};
            }
            else {
                result[name] = Object.create(result[tokens[3]]);
            }
        }
        else if (command == 'set') {
            result[name][tokens[2]] = tokens[3];
        }
        else {
            let output = [];

            for (const key in result[name]) {
                output.push(`${key}:${result[name][key]}`)
            }
            console.log(output.join(','));
        }
    }
}

solve(['create c1',
'create c2 inherit c1',
'set c1 color red',
'set c2 model new',
'print c1',
'print c2']);