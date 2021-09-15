function printRectangle (num = 5) {
    for (let i = 1; i <= num; i++) {
        console.log('* '.repeat(num));
    }
}

printRectangle(1);
printRectangle(2);
printRectangle(5);
printRectangle();