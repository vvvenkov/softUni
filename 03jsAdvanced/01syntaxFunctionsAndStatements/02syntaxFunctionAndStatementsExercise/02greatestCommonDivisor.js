function greatestCommonDivisor(num1, num2) {

    for (let i = 2; i <= num1; i++) {
        if (num1 % i == 0 && num2 % i == 0) {
            console.log(i);
            return;
        }
    }
    if (num1 % 1 === 0 && num2 % 1 === 0) {
        console.log(1);
        return;
    }
    if (num1 % 2 === 0 && num2 % 1 === 0) {
        console.log(2);
        return;
    }
}
greatestCommonDivisor(15,)