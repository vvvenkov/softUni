function luckyNumbers(input) {
    const n = Number(input[0]);
    let number = "";

    for (let i = 1; i <= 9; i++) {
        for (let y = 1; y <= 9; y++) {
            for (let j = 1; j <= 9; j++) {
                for (let k = 1; k <= 9; k++) {
                    if (i + y === j + k) {
                        curNumber = (`${i}${y}${j}${k}`)
                        strToNum = Number(curNumber);
                        num1 = Number(curNumber[0]);
                        num2 = Number(curNumber[1]);

                        if (curNumber.length > 4) {
                            console.log(number);
                            return;
                        }

                        if (n % (num1 + num2) === 0) {
                            number += (`${i}${y}${j}${k} `);
                        }
                    }
                }
            }
        }
    }
    console.log(number);
}
luckyNumbers([24])