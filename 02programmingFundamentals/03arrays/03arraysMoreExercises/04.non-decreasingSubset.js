function nonDecreasingSubset(arr) {

    let newArr = [];
    let currMax = Number(arr[0]);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= currMax) {
            currMax = Number(arr[i]);
            newArr.push(currMax)
        }
    }

    console.log(newArr.join(" "));
}
nonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24])
nonDecreasingSubset([20, 3, 2, 15, 6, 1])