function sort(array, criteria) {
    if (criteria == 'asc') {
        return array.sort((a, b) => a - b);
    }

    return array.sort((a, b) => b - a);
}

console.log(sort([14, 7, 17, 6, 8], 'asc'));
console.log(sort([14, 7, 17, 6, 8], 'desc'));