function oddPositions(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        if (i % 2 != 0) {
            console.log(arr[i] * 2);
        }
    }
}
oddPositions([10, 15, 20, 25])