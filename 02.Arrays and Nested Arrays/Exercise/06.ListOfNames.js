function orderNames(names) {
    let counter = 1;

    console.log(names
        .sort((a, b) => a.localeCompare(b))
        .map(x => `${counter++}.${x}`)
        .join('\n'));
}

orderNames(["John", "Bob", "Christina", "Ema"]);