function solve(arr) {
    const juices = {};
    const bottles = {};


    for (let el of arr) {
        let [name, quantity] = el.split(' => ');

        if (juices[name] == undefined) {
            juices[name] = 0;
        }

        juices[name] += Number(quantity);

        if (juices[name] >= 1000) {
            if (bottles[name] == undefined) {
                bottles[name] = 0;
            }

            bottles[name] += Math.floor(juices[name] / 1000);
            juices[name] = juices[name] % 1000;
        }
    }

    for (const bottle in bottles) {
        console.log(`${bottle} => ${bottles[bottle]}`)
    }
}

solve(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']);

solve(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']);