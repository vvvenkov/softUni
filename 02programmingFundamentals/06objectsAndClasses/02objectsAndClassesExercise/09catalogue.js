function catalogue(arr) {
    let catalogue = {};

    for (let line of arr) {
        let product = line.split(" : ")[0];
        let price = Number(line.split(" : ")[1]);
        catalogue[product] = price;
    }

    let sortKey = Object.keys(catalogue).sort((keyA, keyB) => keyA.localeCompare(keyB));

    let initial = "";
    for (let key of sortKey){
        let name = key;
        if (initial !== name[0]){
            initial = name[0];
            console.log(initial);
        }
        let price = catalogue[key];
        console.log(`  ${name}: ${price}`);
    }
}
catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]
)