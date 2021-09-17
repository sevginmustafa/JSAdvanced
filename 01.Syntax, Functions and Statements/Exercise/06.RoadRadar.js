function roadRadar (speed, area) {
    let areaSpeedLimit;
    let overLimitSpeed = 0;

    switch (area){
        case 'motorway': areaSpeedLimit = 130;
        if (speed > areaSpeedLimit) {
            overLimitSpeed = speed - areaSpeedLimit; 
        }
        break;
        case 'interstate': areaSpeedLimit = 90;
        if (speed > areaSpeedLimit) {
            overLimitSpeed = speed - areaSpeedLimit; 
        }
        break;
        case 'city': areaSpeedLimit = 50;
        if (speed > areaSpeedLimit) {
            overLimitSpeed = speed - areaSpeedLimit; 
        }
        break;
        case 'residential': areaSpeedLimit = 20;
        if (speed > areaSpeedLimit) {
            overLimitSpeed = speed - areaSpeedLimit; 
        }
        break;
    }
    
    if (overLimitSpeed == 0) {
            return `Driving ${speed} km/h in a ${areaSpeedLimit} zone`
        }
        else if (overLimitSpeed <= 20) {
            return `The speed is ${overLimitSpeed} km/h faster than the allowed speed of ${areaSpeedLimit} - speeding`;
        } 
        else if (overLimitSpeed <= 40) {
            return `The speed is ${overLimitSpeed} km/h faster than the allowed speed of ${areaSpeedLimit} - excessive speeding`;
        } 
        else {
            return `The speed is ${overLimitSpeed} km/h faster than the allowed speed of ${areaSpeedLimit} - reckless driving`;
        }
}

console.log(roadRadar(40, 'city'));
console.log(roadRadar(21, 'residential'));
console.log(roadRadar(120, 'interstate'));
console.log(roadRadar(200, 'motorway'));