function evenAndOddSubttraction(arr) {
    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i < arr.length; i++) {
        let num = Number(arr[i]);
        if (num % 2 === 0) {
            evenSum += num;
        } else {
            oddSum += num;
        }
    }
    let diff = evenSum - oddSum;
    console.log(diff);
}
evenAndOddSubttraction([3,5,7,9])