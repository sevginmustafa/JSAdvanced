function solve(obj) {
    const validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const regexUri = /^[A-Za-z0-9.]+$/;
    const validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    const regexMessage = /^[-A-Za-z0-9]*[^<>\\&'"]*$/;

    if (!validMethods.includes(obj.method) || obj.method == undefined) {
        throw new Error('Invalid request header: Invalid Method');
    }

    if (!regexUri.test(obj.uri) || obj.uri == undefined) {
        throw new Error('Invalid request header: Invalid URI');
    }

    if (!validVersions.includes(obj.version) || obj.version == undefined) {
        throw new Error('Invalid request header: Invalid Version');
    }

    if (!regexMessage.test(obj.message) || obj.message == undefined) {
        throw new Error('Invalid request header: Invalid Message');
    }

    return obj;
}

console.log(solve({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
}));

console.log(solve({
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
}));

console.log(solve({
    method: 'POST',
    uri: 'home.bash',
    message: 'rm -rf /*'
}));