function cityRecord(city, population, treasury) {
    let object = {};
    object.name = city;
    object.population = population;
    object.treasury = treasury;

    return object;
}
console.log(cityRecord('asfagpoiansgpoi',
    7000,
    15000));