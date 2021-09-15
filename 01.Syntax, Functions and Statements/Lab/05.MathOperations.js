function mathOperations(numFirst, numSecond, operator){
    let result;

    switch (operator){
        case '+': result = numFirst+numSecond; break;
        case '-': result = numFirst-numSecond; break;
        case '*': result = numFirst*numSecond; break;
        case '/': result = numFirst/numSecond; break;
        case '%': result = numFirst%numSecond; break;
        case '**': result = numFirst**numSecond; break;
    }
    console.log(result);
}
    
mathOperations(5, 6, '+');
mathOperations(3, 5.5, '*');
mathOperations(3, 5, '**');
mathOperations(10,3, '%');