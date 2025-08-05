function factorialDivison(num1, num2) {
    let result1 = 0;
    let result2 = 0;
    let counter = 0;

    for (let i = num1; i > 1; i--) {
        num1 = num1 * (i - 1);
    }
    for (let y = num2; y > 1; y--){
        num2 = num2 * (y - 1);
    }
    
    console.log((num1 / num2).toFixed(2));
}
factorialDivison(5, 2)