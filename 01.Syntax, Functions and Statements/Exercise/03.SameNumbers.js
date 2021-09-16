function sameNumbers (num) {
    let convertNum = num.toString();
    let check = true;
    let sum = 0;

    for (let i = 0; i <= convertNum.length - 1; i++) {
        sum += Number(convertNum[i]);
        if (convertNum[0] != convertNum[i]) {
            check = false;
        }
    }

    console.log(check);
    console.log(sum)
}

sameNumbers(2222222);
sameNumbers(1234);