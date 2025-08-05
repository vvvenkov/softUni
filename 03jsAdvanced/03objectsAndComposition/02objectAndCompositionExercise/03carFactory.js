function carFactory(obj) {

    let res = {};

    res.model = obj.model;

    if (obj.power <= 90) {
        res.engine = {
            power: 90,
            volume: 1800
        }
    } else if (obj.power <= 120) {
        res.engine = {
            power: 120,
            volume: 2400
        }
    } else if (obj.power <= 200) {
        res.engine = {
            power: 200,
            volume: 3500
        }
    }

    res.carriage = {
        type: obj.carriage,
        color: obj.color
    }
    let wheels = [];

    if (obj.wheelsize % 2 === 0) {
        for (let i = 0; i < 4; i++) {
            wheels.push(obj.wheelsize - 1);
        }
    } else {
        for (let i = 0; i < 4; i++) {
            wheels.push(obj.wheelsize)
        }
    }
    res.wheels = wheels;

    return res;
}
console.log(carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));