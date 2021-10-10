function solve(...args) {
    const typeCounts = {};

    for (const arg of args) {
        console.log(`${typeof arg}: ${arg}`);
        if (typeCounts[typeof arg] == undefined) {
            typeCounts[typeof arg] = 0;
        }
        typeCounts[typeof arg]++;
    }

    console.log(Object.entries(typeCounts)
        .sort((a, b) => b[1] - a[1])
        .map(x => `${x[0]} = ${x[1]}`)
        .join('\n'));
}

solve('cat', 42, function () { console.log('Hello world!'); });