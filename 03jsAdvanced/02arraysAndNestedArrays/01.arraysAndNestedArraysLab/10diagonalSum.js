function diagonalSum(arr) {
    let descendingDiagonalIndex = arr.length - 1;
    let ascendingSum = null;
    let descendingSum = null;

    for (let i = 0; i < arr.length; i++) {

        let ascendingDiagonal = arr[i][i];;
        let descendingDiagonal = arr[i][descendingDiagonalIndex--];

        ascendingSum += ascendingDiagonal;
        descendingSum += descendingDiagonal;
    }
    console.log(ascendingSum + " " + descendingSum);
}
diagonalSum([[20, 40],
[10, 60]])

//or with more loops

function diagonalSum2(arr) {
    let ascendingDiagonal = null;
    let descendingDiagonal = null;
    let ascendingSum = null;
    let descendingSum = null;
    let ascendintIndex = 0;
    for (let i = 0; i < arr.length; i++) {
        let innerArr = arr[i];
        let descendingIndex = innerArr.length - 1;

        for (let j = ascendintIndex; j < innerArr.length; j++) {
            ascendingDiagonal = innerArr[j];
            ascendintIndex++;
        }
        for (let y = descendingIndex; y > 0; y--) {
            descendingDiagonal = innerArr[y];
            descendingIndex--;
        }
        ascendingSum += ascendingDiagonal;
        descendingSum += descendingDiagonal;
    }
    console.log(ascendingSum + " " + descendingSum);
}
diagonalSum2([[20, 40],
[10, 60]])