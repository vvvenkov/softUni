function operatioBetweenNumbers(input) {

    let number1 = Number(input[0]);
    let number2 = Number(input[1]);
    let operator = input[2];
    let operation;

    switch (operator) {
        case "+":
            (operation = number1 + number2);
            if (operation % 2 === 0) {
                console.log(`${number1} + ${number2} = ${operation} - even`)
            } else {
                (operation % 2 !== 0)
                console.log((`${number1} + ${number2} = ${operation} - odd`))
            }
            break;
        case "-":
            (operation = number1 - number2);
            if (operation % 2 === 0) {
                console.log(`${number1} - ${number2} = ${operation} - even`)
            } else {
                (operation % 2 !== 0)
                console.log((`${number1} - ${number2} = ${operation} - odd`))
            }
            break;
        case "*":
            (operation = number1 * number2);
            if (operation % 2 === 0) {
                console.log(`${number1} * ${number2} = ${operation} - even`)
            } else {
                (operation % 2 !== 0)
                console.log((`${number1} * ${number2} = ${operation} - odd`))
            }
            break;
        case "/":
            (operation = number1 / number2)
            if (number2 === 0) {
                console.log(`Cannot divide ${number1} by zero`)
            } else {
                console.log(`${number1} / ${number2} = ${operation.toFixed(2)}`)
            }
            break;
        case "%":
            (operation = number1 % number2);
            if (number2 === 0) {
                console.log(`Cannot divide ${number1} by zero`);
            } else {
                console.log(`${number1} % ${number2} = ${operation}`)
            }
            break;
    }
}
