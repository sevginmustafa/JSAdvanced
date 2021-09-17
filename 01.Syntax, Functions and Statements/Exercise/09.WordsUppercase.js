function wordsUppercase (word) {
    const re = new RegExp('[a-zA-z0-9]+', 'g');
    const matches = word.matchAll(re);
    
    let result = Array.from(matches, m => m[0].toUpperCase());

    console.log(result.join(', '));
}

wordsUppercase('Hi, how are you?');
wordsUppercase('hello');