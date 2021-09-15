function sumNums (n , m) {
    let num1 = Number(n);
    let num2 = Number(m);

    let result = 0;

    for (let i = num1; i <= num2; i++) {
        result += i;
    }

    console.log(result);
}

sumNums('1', '5');
sumNums('-8', '20');