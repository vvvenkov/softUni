function equalSums(arr) {
    let arrLeft = 0;
    let arrRight = 0;
    let isEqual = false;
    let indexCounter = 0;

    for (let i = 0; i < arr.length; i++) {
        arrLeft += arr[i];
        indexCounter++;
        if (arr.length <= 1) {
            isEqual = true;
            console.log("0");
            break;
        }
        for (let j = arr.length - 1; j >= 0; j--) {
            if (i >= j) {
                break;
            }
            if (arrLeft === arrRight) {
                isEqual = true;
                break;
            }
            arrRight += arr[j];
        }
        arrRight = 0;
        if (isEqual) {
            console.log(indexCounter);
            break;
        }
    }
    if (!isEqual) {
        console.log("no");
    }
}
equalSums([1, 2, 3, 3])
console.log("-------------------");
equalSums([1, 2])
console.log("-------------------");
equalSums([1])
console.log("-------------------");
equalSums([1, 2, 3])
console.log("-------------------");
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])