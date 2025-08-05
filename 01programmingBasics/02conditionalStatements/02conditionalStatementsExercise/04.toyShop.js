function toyShop(input) {
    let vacation = Number(input[0]);
    let puzzles = Number(input[1]);
    let dolls = Number(input[2]);
    let teddyBears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);

    let price = (puzzles * 2.60) + (dolls * 3) + (teddyBears * 4.10) + (minions * 8.20) + (trucks * 2);
    let totalToys = puzzles + dolls + teddyBears + minions + trucks;

    if (totalToys >= 50) {
        price = price - (price * 0.25)
    }

    let rent = price * 0.10;
    let revenue = price - rent;
    let vacationCash = revenue - vacation;
    let notEnough = vacation - revenue;

    if (vacation < revenue) {
        console.log(`Yes! ${vacationCash.toFixed(2)} lv left.`);
    } else if (vacation > revenue) {
        console.log(`Not enough money! ${notEnough.toFixed(2)} lv needed.`);
    } else if (vacationCash === 0) {
        console.log(`Yes! ${vacationCash.toFixed(2)} lv left.`)
    }
}