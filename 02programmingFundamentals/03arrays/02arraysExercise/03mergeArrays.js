function mergeArrays(arr1, arr2) {
    let newArr = [];
    let arr1Cur;
    let arr2Cur;
    for (let i = 0; i < arr1.length; i++) {
        if (i % 2 === 0 || i === 0) {
            arr1Cur = Number(arr1[i]);
            arr2Cur = Number(arr2[i]);
            newArr.push(arr1Cur + arr2Cur);
        } else {
            arr1Cur = String(arr1[i]);
            arr2Cur = String(arr2[i]);
            newArr.push(arr1Cur + arr2Cur);
        }
    }
    console.log(newArr.join(" - "));
}
mergeArrays(['13', '12312', '5', '77', '4'],
    ['22', '333', '5', '122', '44'])