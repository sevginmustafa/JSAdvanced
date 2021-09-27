function carFactory(obj) {
    const result = {};
    let power;
    let volume;

    if (obj.power <= 90) {
        power = 90;
        volume = 1800;
    }
    else if (obj.power <= 120) {
        power = 120;
        volume = 2400;
    }
    else {
        power = 200;
        volume = 3500;
    }

    if (obj.wheelsize % 2 == 0) {
        obj.wheelsize--;
    }

    result.model = obj.model;
    result.engine = { power, volume };
    result.carriage = { type: obj.carriage, color: obj.color };
    result.wheels = Array(4).fill(obj.wheelsize);

    return result;
}

console.log(carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));
console.log(carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}));