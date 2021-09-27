function heroicInventory(arr) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        const [name, level, tokens] = arr[i].split(' / ');

        let items = [];

        if (tokens != undefined) {
            items = tokens.split(', ');
        }

        result.push({ name, level: Number(level), items });
    }

    return JSON.stringify(result);
}

console.log(heroicInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
));
console.log(heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade']));