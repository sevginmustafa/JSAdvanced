function greatestCommonDivisor (num1, num2) {
    let maxNum = Math.max(num1, num2);
    let minNum = Math.min(num1, num2);

    let result = 0;

    for(let i = 1; i <= minNum; i++){
        if (maxNum%i==0 && minNum%i==0) {
            result=i;
        }
    }

    console.log(result);
}

greatestCommonDivisor(15, 5);
greatestCommonDivisor(2154, 458);