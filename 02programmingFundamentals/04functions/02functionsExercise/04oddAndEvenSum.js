function oddAndEvenSum(num) {
    let numToString = String(num);
    let currentNumber = 0;
    let sumEven = 0;
    let sumOdd = 0;

    for (let i = 0; i < numToString.length; i++) {
        currentNumber = Number(numToString[i]);
        if (currentNumber % 2 === 0){
            sumEven += currentNumber; 
        } else {
            sumOdd += currentNumber;
        }
    }
    console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);
}
oddAndEvenSum(3495892137259234)