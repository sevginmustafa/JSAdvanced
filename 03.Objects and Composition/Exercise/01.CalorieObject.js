function calories(arr) {
    const result = {};

    for (let i = 0; i < arr.length - 1; i += 2) {
        let product = arr[i];
        let calories = Number(arr[i + 1]);

        result[product] = calories;
    }

    console.log(result);
}

calories(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
calories(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);