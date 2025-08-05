function reverseAnArray(n, inputArr) {
    let arr = [];

    for (let i = n; i > 0; i--) {
        arr.push(inputArr[i - 1]);
    }
    console.log(arr.join(" "));
}
reverseAnArray(3, [10, 20, 30, 40, 50])