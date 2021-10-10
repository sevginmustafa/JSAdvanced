function solution() {
    const recipes = {
        'apple': {
            'carbohydrate': 1,
            'flavour': 2
        },
        'lemonade': {
            'carbohydrate': 10,
            'flavour': 20
        },
        'burger': {
            'carbohydrate': 5,
            'fat': 7,
            'flavour': 3
        },
        'eggs': {
            'protein': 5,
            'fat': 1,
            'flavour': 1
        },
        'turkey': {
            'protein': 10,
            'carbohydrate': 10,
            'fat': 10,
            'flavour': 10
        }
    };

    const ingredients = {
        'protein': 0,
        'carbohydrate': 0,
        'fat': 0,
        'flavour': 0
    };

    return function (input) {
        const tokens = input.split(' ');
        const command = tokens[0];

        if (command == 'restock') {
            const microelement = tokens[1];
            const quantity = Number(tokens[2]);

            ingredients[microelement] += quantity;

            return 'Success';
        }
        else if (command == 'prepare') {
            const recipe = tokens[1];
            const quantity = Number(tokens[2]);

            for (let ingredient in recipes[recipe]) {
                if (recipes[recipe][ingredient] * quantity > ingredients[ingredient] * quantity) {
                    return `Error: not enough ${ingredient} in stock`;
                }
            }

            for (let ingredient in recipes[recipe]) {
                ingredients[ingredient] -= recipes[recipe][ingredient] * quantity;
            }

            return 'Success';
        }
        else {
            return `protein=${ingredients['protein']} carbohydrate=${ingredients['carbohydrate']} fat=${ingredients['fat']} flavour=${ingredients['flavour']}`;
        }
    }
}

let manager = solution();
console.log(manager('prepare turkey 1')); // Success 
console.log(manager('restock protein 10')); // Error: not enough carbohydrate in stock 
console.log(manager('prepare turkey 1')); // Error: not enough carbohydrate in stock 
console.log(manager('restock carbohydrate 10')); // Error: not enough carbohydrate in stock 
console.log(manager('prepare turkey 1')); // Error: not enough carbohydrate in stock 