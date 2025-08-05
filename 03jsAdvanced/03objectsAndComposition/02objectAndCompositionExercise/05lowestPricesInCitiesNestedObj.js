function lowestPricesInCities(arr) {
    let obj = {};

    arr.forEach(line => {
        let [town, product, price] = line.split(" | ");
        price = Number(price);
        if (obj.hasOwnProperty(product)) {
            let currentPrice = obj[product]["price"];
            if (currentPrice > price) {
                obj[product] = { town, price };
            }
        } else {
            obj[product] = { town, price };
        }
    });

    for (let [product, value] of Object.entries(obj)) {
        console.log(`${product} -> ${value.price} (${value.town})`);
    }
}
lowestPricesInCities(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'])