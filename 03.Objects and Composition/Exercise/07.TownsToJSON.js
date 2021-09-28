function townsToJSON(arr) {
    const result = [];

    for (let i = 1; i < arr.length; i++) {
        let [town, latitude, longitude] = arr[i].split('|').split(' ');
        latitude = Number(latitude);
        longitude = Number(longitude);

        result.push({ 'Town': town, 'Latitude': latitude.toFixed(2), 'Longitude': longitude.toFixed(2) });
    }

    return JSON.stringify(result);
}

console.log(townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']));
console.log(townsToJSON(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |']));