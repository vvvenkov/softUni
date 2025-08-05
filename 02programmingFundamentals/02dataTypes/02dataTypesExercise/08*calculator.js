function calculator(num1, operator, num2) {
    if (operator === "+") {
        res = num1 + num2;
    } else if (operator === "-") {
        res = num1 - num2;
    } else if (operator === "/") {
        res = num1 / num2;
    } else if (operator === "*") {
        res = num1 * num2;
    }
    console.log((res.toFixed(2)));
}
calculator(25.5, "-", 3);