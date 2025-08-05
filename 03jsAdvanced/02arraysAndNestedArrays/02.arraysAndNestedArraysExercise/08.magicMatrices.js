function magicMatrices(arr) {

    let row1 = arr[0][0] + arr[0][1] + arr[0][2];
    let row2 = arr[1][0] + arr[1][1] + arr[1][2];
    let row3 = arr[2][0] + arr[2][1] + arr[2][2];
    let column1 = arr[0][0] + arr[1][0] + arr[2][0];
    let column2 = arr[0][1] + arr[1][1] + arr[2][1];
    let column3 = arr[0][2] + arr[1][2] + arr[2][2];

    switch (row1) {
        case row1 === row2, row3, column1, column2, column3: return true;
        default: return false;
    }
}
console.log(magicMatrices([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]));