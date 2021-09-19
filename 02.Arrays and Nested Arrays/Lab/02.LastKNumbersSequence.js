function lastKNumbers(n, k) {
    const array = [1];

    for (let i = 1; i < n; i++) {
        let temp = 0;

        for (let j = k; j > 0; j--) {
            if (i - j >= 0) {
                temp += array[i - j];
            }
        }
        
        array.push(temp);
    }

    return array;
}

console.log(lastKNumbers(6, 3));
console.log(lastKNumbers(8, 2));