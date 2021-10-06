function attachEventsListeners() {
    document.querySelector('input[type="button"]').addEventListener('click', onclick);

    function onclick() {
        let input = Number(document.getElementById('inputDistance').value);
        const inputUnit = document.getElementById('inputUnits').value;
        const outputUnit = document.getElementById('outputUnits').value;

        switch (inputUnit) {
            case 'km': input *= 1000; break;
            case 'cm': input *= 0.01; break;
            case 'mm': input *= 0.001; break;
            case 'mi': input *= 1609.34; break;
            case 'yrd': input *= 0.9144; break;
            case 'ft': input *= 0.3048; break;
            case 'in': input *= 0.0254; break;
        }

        switch (outputUnit) {
            case 'km': input /= 1000; break;
            case 'cm': input /= 0.01; break;
            case 'mm': input /= 0.001; break;
            case 'mi': input /= 1609.34; break;
            case 'yrd': input /= 0.9144; break;
            case 'ft': input /= 0.3048; break;
            case 'in': input /= 0.0254; break;
        }

        document.getElementById('outputDistance').value = input;
    }
}