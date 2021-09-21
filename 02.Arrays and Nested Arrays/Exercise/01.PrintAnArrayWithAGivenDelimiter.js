function printArrayWithDelimeter(array, delimeter) {
    console.log(array.join(delimeter));
}

printArrayWithDelimeter(['One',
    'Two',
    'Three',
    'Four',
    'Five'],
    '-'
);
printArrayWithDelimeter(['How about no?',
    'I',
    'will',
    'not',
    'do',
    'it!'],
    '_'
);