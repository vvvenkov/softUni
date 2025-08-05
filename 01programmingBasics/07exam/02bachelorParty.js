function bachelorParty(input) {
    let partyPrice = Number(input[0]);
    let loveLetters = Number(input[1]);
    let waxRoses = Number(input[2]);
    let keyRings = Number(input[3]);
    let drawings = Number(input[4]);
    let luckyChamrs = Number(input[5]);


    let totalSum = (loveLetters * 0.60) + (waxRoses * 7.20) + (keyRings * 3.60) + (drawings * 18.20) + (luckyChamrs * 22);
    let totalStuff  = loveLetters + waxRoses + keyRings + drawings + luckyChamrs;

    if (totalStuff >= 25){
        totalSum -= totalSum * 0.35;
    }
    let hostingPrice = totalSum * 0.10;

    let profit = totalSum - hostingPrice;

    if (profit > partyPrice){
        console.log(`Yes! ${(profit - partyPrice).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(partyPrice - profit).toFixed(2)} lv needed.`);
    }
}
bachelorParty([40.8,
    20,
    25,
    30,
    50,
    10])