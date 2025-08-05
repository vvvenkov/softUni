function lowestPricesInCities(arr) {
    let obj = {};
    let arrOfObjects = [];

    for (let line of arr) {
        let [town, product, price] = line.split(" | ");
        price = Number(price);

        let find = arrOfObjects.find(el => el.product === product);

        if (!find) {
            obj.town = town;
            obj.product = product;
            obj.price = price;
            arrOfObjects.push(obj);
        } else if (price < find.price) {
            find.town = town;
            find.price = price;
        }
        obj = {};
    }
    for (let el of arrOfObjects) {
        console.log(`${el.product} -> ${el.price} (${el.town})`);
    }
}
lowestPricesInCities(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'])