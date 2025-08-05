function gameOfIntervals(input) {
    let index = 1;
    let gameRounds = Number(input[0]);
    let res = 0;
    let invalid = 0;
    let ten = 0;
    let twenty = 0;
    let thirty = 0;
    let forty = 0;
    let fifty = 0;

    for (let i = 1; i <= gameRounds; i++) {
        let currentRound = Number(input[i]);

        if (currentRound >= 0 && currentRound <= 9) {
            res += currentRound * 0.20;
            ten++;
        } else if (currentRound >= 10 && currentRound <= 19) {
            res += currentRound * 0.30;
            twenty++;
        } else if (currentRound >= 20 && currentRound <= 29) {
            res += currentRound * 0.40;
            thirty++;;
        } else if (currentRound >= 30 && currentRound <= 39) {
            res += 50;
            forty++;
        } else if (currentRound >= 40 && currentRound <= 50) {
            res += 100;
            fifty++;
        } else {
            res = res / 2;
            invalid++;
        }
    }
    console.log(res.toFixed(2));
    console.log(`From 0 to 9: ${((ten / gameRounds) * 100).toFixed(2)}%`);
    console.log(`From 10 to 19: ${((twenty / gameRounds) * 100).toFixed(2)}%`);
    console.log(`From 20 to 29: ${((thirty / gameRounds) * 100).toFixed(2)}%`);
    console.log(`From 30 to 39: ${((forty / gameRounds) * 100).toFixed(2)}%`);
    console.log(`From 40 to 50: ${(((fifty / gameRounds) * 100).toFixed(2))}%`);
    console.log(`Invalid numbers: ${(((invalid / gameRounds) * 100).toFixed(2))}%`);
}
gameOfIntervals([10,
    43,
    57,
    -12,
    23,
    12,
    0,
    50,
    40,
    30,
    20])