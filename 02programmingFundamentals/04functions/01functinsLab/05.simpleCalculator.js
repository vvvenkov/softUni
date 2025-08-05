function simpleCalculator(num1, num2, operator) {
    let operations = {
        "add": num1 + num2,
        "subtract": num1 - num2,            //calculator without using any If/switch statements
        "divide": num1 / num2,
        "multiply": num1 * num2,
    }
    console.log(operations[operator]);
}
simpleCalculator(40,
    8,
    'divide')