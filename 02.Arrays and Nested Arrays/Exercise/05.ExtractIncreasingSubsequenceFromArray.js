function increasingSubsequence(array) {
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            array.splice(i + 1, 1);
            i = -1;
        }
    }
    
    return array;
}

console.log(increasingSubsequence([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
));
console.log(increasingSubsequence([1,
    2,
    3,
    4]
));
console.log(increasingSubsequence([20,
    3,
    2,
    15,
    6,
    1]
));