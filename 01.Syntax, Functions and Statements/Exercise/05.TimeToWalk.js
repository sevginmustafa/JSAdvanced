function timeToWalk (steps, stepLength, speed) {
    function pad(d) {
    return (d < 10) ? '0' + d.toString() : d.toString();
}
    let distance = steps*stepLength;
    let restMinutes = Math.floor(distance/500);
    let walkTime = distance/speed/1000*60;
    let walkMinutes = Math.floor(walkTime);
    let walkSeconds = Math.ceil((walkTime - walkMinutes)*60);

    let walkHours = 0;

    if(walkMinutes >= 60){
        walkHours = Math.floor(walkMinutes/60);
        walkMinutes = walkMinutes%60;
    }

    console.log(`${pad(walkHours)}:${pad(walkMinutes+restMinutes)}:${pad(walkSeconds)}`);
}

timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);