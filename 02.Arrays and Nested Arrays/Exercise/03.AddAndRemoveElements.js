function addAndRemove(commands) {
    let result = [];
    let initialNum = 1;

    for (let i = 0; i < commands.length; i++) {
        if (commands[i] == "add") {
            result.push(initialNum);
        }
        else {
            result.pop();
        }

        initialNum++;
    }

    if (result.length > 0) {
        console.log(result.join('\n'));
    }
    else {
        console.log('Empty');
    }
}

addAndRemove(['add',
    'add',
    'add',
    'add']
);
addAndRemove(['add',
    'add',
    'remove',
    'add',
    'add']
);
addAndRemove(['remove',
    'remove',
    'remove']
);