function storage(input) {

    let obj = {};

    for (let line of input) {
        let [product, quantity] = line.split(" ");

        if (!obj.hasOwnProperty(product)) {
            obj[product] = Number(quantity);
        } else {
            obj[product] += Number(quantity);
        }
    }

    for (let el in obj) {
        console.log(`${el} -> ${obj[el]}`);
    }
}
storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'])