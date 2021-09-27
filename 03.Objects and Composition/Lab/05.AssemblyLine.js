function createAssemblyLine() {
    const result = {};

    result.hasClima = (obj) => {
        obj.temp = 21;
        obj.tempSettings = 21;
        obj.adjustTemp = () => {
            if (obj.temp < obj.tempSettings) {
                obj.temp++;
            }
            else if (obj.temp > obj.tempSettings) {
                obj.temp--;
            }
        };
    }

    result.hasAudio = (obj) => {
        obj.currentTrack = {
            'name': null,
            'artist': null,
        };
        obj.nowPlaying = () => {
            if (obj.currentTrack != null) {
                console.log(`Now playing '${obj.currentTrack.name}' by ${obj.currentTrack.artist}`);
            }
        };
    }

    result.hasParktronic = (obj) => {
        obj.checkDistance = (distance) => {
            if (distance < 0.1) {
                console.log(`Beep! Beep! Beep!`);
            }
            else if (distance >= 0.1 && distance < 0.25) {
                console.log(`Beep! Beep!`);
            }
            else if (distance >= 0.25 && distance < 0.5) {
                console.log(`Beep!`);
            }
            else {
                console.log('');
            }
        };
    }

    return result;
}

const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};

assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);