function townPopulation(arr) {
    let object = {};
    let newArr = [];

    arr.forEach(element => {
        let [town, population] = element.split(" <-> ");
        population = Number(population);

        if (object.hasOwnProperty(town)) {
            object[town] += population;
        } else {
            object[town] = population;
        }
    });

    for (let town in object) {
        console.log(town + " : " + object[town]);
    }
}
townPopulation(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000', 'Las Vegas <-> 1000000'])