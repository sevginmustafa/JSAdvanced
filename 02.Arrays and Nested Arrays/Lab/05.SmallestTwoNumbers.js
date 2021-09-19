function smallestTwoNumbers(array) {
    console.log(array.sort((a, b) => a - b).splice(0, 2).join(' '));
}

smallestTwoNumbers([30, 15, 50, 5]);
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);