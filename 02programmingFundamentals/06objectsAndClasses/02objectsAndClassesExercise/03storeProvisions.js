function storeProvisions(stock, order) {
    let obj = {};

    for (let i = 0; i < stock.length; i += 2) {
        let product = stock[i];
        let quantity = Number(stock[i + 1]);
        obj[product] = quantity;
    }
    for (let i = 0; i < order.length; i += 2) {
        let product = order[i];
        let quantity = Number(order[i + 1]);
        if (obj.hasOwnProperty(product)){
            obj[product] += quantity;
        } else {
            obj[product] = quantity;
        }
    }

    for (let el of Object.keys(obj)) {
        console.log(`${el}  -> ${obj[el]}`);
    }
}
storeProvisions([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
], ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
])