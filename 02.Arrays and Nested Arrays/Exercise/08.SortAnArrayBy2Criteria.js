function sortArray(array) {
    console.log(array.sort((a, b) =>
        a.length == b.length ? a.localeCompare(b) : a.length - b.length).join('\n'));
}

sortArray(['alpha',
    'beta',
    'gamma']
);
sortArray(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George']
);
sortArray(['test',
    'Deny',
    'omen',
    'Default']
);