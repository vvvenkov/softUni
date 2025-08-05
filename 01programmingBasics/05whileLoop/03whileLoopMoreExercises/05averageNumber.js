function averageArythmic(input) {
    let number = Number(input[0]);
    let sum = 0;
    let numSum = 0;

    for (let i = 1; i < input.length; i++) {
        numSum++;
        sum += Number(input[i]);
    }

    console.log((sum / numSum).toFixed(2));
}
averageArythmic(["4", "3", "2", "4", "2"])