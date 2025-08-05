function aMinerTaks(input) {
    let map = new Map();

    for (let i = 0; i < input.length; i++) {
        if (i % 2 === 0) {
            let resource = input[i];
            let quantity = Number(input[i + 1]);

            if(!map.has(resource)){
                map.set(resource, quantity);
            } else {
                map.set(resource, quantity + map.get(resource, quantity));
            }
        }
    }
    for (let el of Array.from(map)){
        console.log(el[0] + " -> " + el[1]);
    }
}
aMinerTaks([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
])
console.log("--------------");
aMinerTaks([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
])