function equalArrays(arr1, arr2) {
    let sum = 0;
    let areEqual = true;
    let index = 0;

    for (let i = 0; i < arr1.length; i++) {
        let numArr1 = Number(arr1[i]);
        let numArr2 = Number(arr2[i]);
        index = i;
        sum += numArr1;
        if (numArr1 === numArr2) {
            continue;
        } else {
            areEqual = false;
            break;
        }
    }
    if (!areEqual) {
        console.log(`Arrays are not identical. Found difference at ${index} index`);
    } else {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}
equalArrays(['10', '20', '30'], ['10', '20', '30'])
console.log("------------");
equalArrays(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5'])
console.log("-----------");
equalArrays(['1'], ['10'])

