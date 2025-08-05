function arrayRotation(arr, rotations) {
    let buffArr = [];

    for (let i = 0; i < rotations; i++) {
        for (let j = 1; j < arr.length; j++) {
            let curChar = arr[j];
            buffArr.push(curChar);
        }
        buffArr.push(arr[0]);
        arr = buffArr;
        buffArr = [];
    }
    console.log(arr.join(" "));
}
arrayRotation([51, 47, 32, 61, 21], 2)
