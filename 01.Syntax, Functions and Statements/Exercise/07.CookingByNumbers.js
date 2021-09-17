function cookingByNumbers (num, ...params) {
    let parsedInt = parseInt(num);
    let operations = Array.from(params);

    for (let i = 0; i < operations.length; i++) {
        switch (operations[i]) {
            case 'chop': parsedInt /= 2; break;
            case 'dice': parsedInt = Math.sqrt(parsedInt); break;
            case 'spice': parsedInt += 1; break;
            case 'bake': parsedInt *= 3; break;
            case 'fillet': parsedInt *= 0.8; break;
        }

        console.log(parsedInt);
    }
}

//cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');