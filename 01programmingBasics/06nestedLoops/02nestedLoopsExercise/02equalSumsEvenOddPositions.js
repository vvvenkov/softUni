function equalSumsEvenoddPositions(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let res = "";

    for (let i = num1; i <= num2; i++) {
        let currentNum = "" + i;
        let evenSum = 0;
        let oddSum = 0;
        for (let j = 0; j <= currentNum.length; j++) {
            let currentDigit = Number(currentNum.charAt(j))
            if (j % 2 === 0) {
                evenSum += currentDigit;
            } else {
                oddSum += currentDigit;
            }
        }
        if (evenSum === oddSum) {
            res += (`${i} `);
        }
    }
    console.log(res);
}
equalSumsEvenoddPositions((["100000",
    "100050"]))