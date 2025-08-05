function sumofTwoNumber(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let magicNumber = Number(input[2]);
    let combinationsCount = 0;
    let sum = 0;
    for (let i = start; i <= end; i++) {
        for (let y = start; y <= end; y++) {
            if (i + y === magicNumber) {
                combinationsCount++;
                console.log(`Combination N:${combinationsCount} (${i} + ${y} = ${magicNumber})`);
                return;
                sum = i + y;
            } else {
                combinationsCount++;
            }
        }
    }
    if (sum !== magicNumber) {
        console.log(`${combinationsCount} combinations - neither equals ${magicNumber}`);
        combinationsCount++;
    }
}
sumofTwoNumber(["23",
"24",
"20"])