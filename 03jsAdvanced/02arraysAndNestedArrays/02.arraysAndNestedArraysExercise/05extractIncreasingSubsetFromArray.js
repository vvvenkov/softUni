function extractIncreasingSubsetFromArray(arr) {
    let biggestNum = Number.MIN_SAFE_INTEGER;
    let subsetArr = [];

    for (let num of arr) {
        if (num > biggestNum) {
            biggestNum = num;
            subsetArr.push(num);
        }
    }

    return subsetArr;

}
extractIncreasingSubsetFromArray([1,
    2,
    3,
    4])

//or with .reduce()

function extractIncreasingSubsetFromArray2(data) {
    let biggest = Number.MIN_SAFE_INTEGER;
    return data.reduce((acc, el) => {
        if (el >= biggest) {
            biggest = el;
            acc.push(el);
        }
        return acc;
    }, []);
}
console.log(extractIncreasingSubsetFromArray2([1,
    2,
    3,
    4]));