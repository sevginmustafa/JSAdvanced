function solution(num) {
    return function (numToAdd) {
        return num + numToAdd;
    }
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));
