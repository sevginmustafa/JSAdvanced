function sumFirstLast(array) {
    return Number(array.pop()) + Number(array.shift());
}

console.log(sumFirstLast(['20', '30', '40']));
console.log(sumFirstLast(['5', '10']));