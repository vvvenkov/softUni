function towns(input) {
    for (let el of input) {
        let tokens = el.split(" | ")
        let obj = {
            town: tokens[0],
            latitude: Number(tokens[1]).toFixed(2),
            longitude: Number(tokens[2]).toFixed(2),
        }
        console.log(obj);
    }
}
towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'])