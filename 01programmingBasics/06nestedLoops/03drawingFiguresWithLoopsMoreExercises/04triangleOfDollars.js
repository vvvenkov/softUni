function triangleOfDollars(input) {
    let symbol = "$";
    let n = Number(input[0]);

    for (let i = 1; i <= n; i++) {
        let res = "";
        for (let y = 0; y < i; y++) {
            res += symbol + " ";
        }
        console.log(res);
    }
}
triangleOfDollars([5])