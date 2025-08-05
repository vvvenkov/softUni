function coins(input) {
    let index = 0;
    let change = Number(input[index]);
    let coins = 0;
    
    while (change >= 2.00) {
        change = Number(change - 2.00).toFixed(2);
        coins++;
    }
    while (change >= 1.00) {
        change = Number(change - 1.00).toFixed(2);
        coins++
    }
    while (change >= 0.50) {
        change = Number(change - 0.50).toFixed(2);
        coins++;
    }
    while (change >= 0.20) {
        change = Number(change - 0.20).toFixed(2);
        coins++;
    }
    while (change >= 0.10) {
        change = Number(change - 0.10).toFixed(2);
        coins++;
    }
    while (change >= 0.05) {
        change = Number(change - 0.05).toFixed(2);
        coins++;
    }
    while (change >= 0.02) {
        change = Number(change - 0.02).toFixed(2);
        coins++;
    }
    while (change >= 0.01) {
        change = Number(change - 0.01).toFixed(2);
        coins++;
    }
    console.log(coins);
}
coins([10])