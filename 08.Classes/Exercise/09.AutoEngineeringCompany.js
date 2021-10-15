function solve(arr) {
    const carBrands = {};

    for (let el of arr) {
        const [carBrand, carModel, producedCars] = el.split(' | ');

        if (carBrands[carBrand] == undefined) {
            carBrands[carBrand] = {};
        }

        if (carBrands[carBrand][carModel] == undefined) {
            carBrands[carBrand][carModel] = 0;
        }

        carBrands[carBrand][carModel] += Number(producedCars);

    }

    for (const brand in carBrands) {
        console.log(brand);
        for (const model in carBrands[brand]) {
            console.log(`###${model} -> ${carBrands[brand][model]}`)
        }
    }
}

solve(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']);