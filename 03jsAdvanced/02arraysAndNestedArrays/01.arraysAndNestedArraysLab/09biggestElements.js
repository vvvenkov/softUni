function biggestElement(arr) {
    let biggestNumber = Number.MIN_SAFE_INTEGER; // if number is negative
    let innerArr = [];

    for (let i = 0; i < arr.length; i++) {
        innerArr = arr[i];
        for (let j = 0; j < innerArr.length; j++) {
            if (innerArr[j] >= biggestNumber) {
                biggestNumber = innerArr[j];
            }
        }
    }
    console.log(biggestNumber);
}
biggestElement([[-20, -50, -10],
[-8, -33, -145]]) 