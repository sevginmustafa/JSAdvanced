function getFibonator() {
    let fibonacci = [0, 1];

    return function () {
        fibonacci.push(fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]);

        return fibonacci[fibonacci.length - 2];
    }
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
