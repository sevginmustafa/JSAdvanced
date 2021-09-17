function validityChecker (x1, y1, x2, y2) {
    let result1 = Math.sqrt(Math.pow(0-x1, 2) + (Math.pow(0-y1, 2)));
    let result2 = Math.sqrt(Math.pow(0-x2, 2) + (Math.pow(0-y2, 2)));
    let result3 = Math.sqrt(Math.pow(x2-x1, 2) + (Math.pow(y2-y1, 2)));

    if (Number.isInteger(result1)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`)
    }
    else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`)
    }

    if (Number.isInteger(result2)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`)
    }
    else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`)
    }

    if (Number.isInteger(result3)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
    }
    else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
    }
}

validityChecker(3, 0, 0, 4);
validityChecker(2, 1, 1, 1);