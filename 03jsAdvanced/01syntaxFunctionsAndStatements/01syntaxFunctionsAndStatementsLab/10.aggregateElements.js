function aggregateElements(input) {
    let sum = 0;
    let invertedSum = 0;
    let concatSum = "";

    for (let i = 0; i < input.length; i++) {
        sum += input[i];
        invertedSum += 1 / input[i];
        concatSum += input[i];
    }


    console.log(sum);
    console.log(invertedSum);
    console.log(stringSum);
}
aggregateElements([1, 2, 3])