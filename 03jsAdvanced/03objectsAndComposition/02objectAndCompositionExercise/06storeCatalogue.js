function storeCatalogue(arr) {
    let obj = {};

    for (let line of arr) {
        let [product, price] = line.split(" : ");

        if (!obj.hasOwnProperty(product)) {
            obj[product] = price;
        }
    }

    let sorted = Object.keys(obj).sort((a, b) => a.localeCompare(b));
    let inital = "";

    for (let el of sorted) {
        let name = el;
        let price = obj[el];
        if (name[0] !== inital) {
            console.log(name[0]);
            console.log(`  ${name}: ${price}`);
        } else {
            console.log(`  ${name}: ${price}`);
        }
        inital = name[0];
    }
}
storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'])