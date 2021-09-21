function sortNumbers(numbers) {
    numbers.sort((a, b) => a - b);
    let leftSide = numbers.slice(0, Math.ceil(numbers.length / 2));
    let rightSide = numbers.slice(Math.ceil(numbers.length / 2));
    let result = [];

    for (let i = 0; i < numbers.length; i += 2) {
        result[i] = leftSide.shift();
        result[i + 1] = rightSide.pop();
    }

    return result;
}

console.log(sortNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));