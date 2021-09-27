// function lowestPrices(arr) {
//     const tempArray = [];

//     for (let el of arr) {
//         let [town, product, price] = el.split(' | ');
//         price = Number(price);

//         let current = tempArray.find(x => x.product == product && x.town == town);

//         if (current) {
//             current.price = price;
//         }
//         else {
//             tempArray.push({ town, product, price });
//         }
//     }

//     let resultArray = [];

//     for (let el of tempArray) {
//         if (!resultArray.some(x => x.product == el.product)) {
//             resultArray.push(el);
//         }
//         else {
//             let current = resultArray.find(x => x.product == el.product);

//             if (current.price > el.price) {
//                 current.town = el.town;
//                 current.price = el.price;
//             }
//         }
//     }

//     for (let el of resultArray) {
//         console.log(`${el.product} -> ${el.price} (${el.town})`);
//     }
// }

function lowestPrices(arr) {
    const result = {};

    for (let el of arr) {
        let [town, product, price] = el.split(' | ');

        if (result[product] == undefined) {
            result[product] = {};
        }

        result[product][town] = Number(price);
    }

    for (let [product, towns] of Object.entries(result)) {
        let sorted = Object.entries(towns).sort((a, b) => a[1] - b[1]);
        const [town, price] = sorted[0];
        console.log(`${product} -> ${price} (${town})`);
    }
}

lowestPrices(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']);