function biggestOfThreeNumber(num1, num2, num3) {
    let maxNumber = Number.MIN_SAFE_INTEGER;
    let res = 0;

    if (num1 > num2 && num1 > num3) {
        res = num1;
    } else if (num2 > num1 && num2 > num3) {
        res = num2;
    } else if (num3 > num1 && num3 > num2) {
        res = num3;
    } else {
        res = num1;
    }
    console.log(res);
}
biggestOfThreeNumber(2, 2, 2)