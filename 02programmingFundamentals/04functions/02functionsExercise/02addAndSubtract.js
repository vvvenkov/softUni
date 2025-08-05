function addAndSubtract(num1, num2, num3) {

    function sumTwoNumbers(num1, num2) {
        return num1 + num2;
    }
    function subtractThirdNumber(sum, num3) {
        return sum - num3;
    }
    
    let sum = sumTwoNumbers(num1, num2);
    let subtract = subtractThirdNumber(sum, num3)

    return subtract;
}

console.log(addAndSubtract(1, 17, 30));