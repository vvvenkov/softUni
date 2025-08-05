function sameNumber(number) {
    let numberToString = String(number);
    let sum = 0;
    let stringToNum = 0;
    let result = true;

    for (let i = 0; i < numberToString.length; i++) {
        stringToNum = Number(numberToString[i]);
        if (numberToString[i + 1] === undefined) {
            sum += stringToNum;
            break;
        }
        if (numberToString[i] != numberToString[i + 1]) {
            result = false;
            sum += stringToNum;
        } else {
            result = true;
            sum += stringToNum;
        }
    }
    console.log(result);
    console.log(sum);
}
sameNumber(1)