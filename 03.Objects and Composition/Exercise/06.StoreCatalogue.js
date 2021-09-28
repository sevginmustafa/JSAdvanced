function storeCatalogue(arr) {
    let result = {};

    for (let product of arr) {
        let [name, price] = product.split(' : ');
        price = Number(price);

        if (result[name[0]] == undefined) {
            result[name[0]] = {};
        }

        result[name[0]][name] = price;
    }

    for (let el of Object.entries(result).sort()) {
        const [letter, products] = el;

        console.log(letter);
        for (let product of Object.entries(products).sort()) {
            console.log(`  ${product[0]}: ${product[1]}`)
        }
    }
}

storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
);
storeCatalogue(['Banana : 2',
    'Rubic\'s Cube : 5',
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10']
);