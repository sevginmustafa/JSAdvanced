function extract(content) {
    content = document.getElementById(content).textContent;
    let result = '';
    const pattern = /\((.+?)\)/g;
    let match = pattern.exec(content);

    while (match != null) {
        result += match[1] + '; ';
        match = pattern.exec(content);
    }

    return result;
}