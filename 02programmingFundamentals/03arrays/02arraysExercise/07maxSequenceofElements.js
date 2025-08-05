function maxSequenceOfElements(arr) {
    let buffArr = [];
    let sequenceArr = [];

    for (let i = 0; i < arr.length; i++) {
        let currentNumber = arr[i];
        buffArr.push(currentNumber);
        if (buffArr.length > 0 && buffArr.length > sequenceArr.length) {
            sequenceArr = buffArr;
        }
        if (currentNumber !== arr[i + 1]) {
            buffArr = [];
        }
    }
    console.log(sequenceArr.join(" "));
}
maxSequenceOfElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])
maxSequenceOfElements([1, 1, 1, 2, 3, 1, 3, 3])
maxSequenceOfElements([4, 4, 4, 4])
maxSequenceOfElements([0, 1, 1, 5, 2, 2, 6, 3, 3])
