function sortingNumbers(arr) {
    let sortedArr = arr.sort((a, b) => a - b).slice(); // use .slice() in order to return a shallow copy of the array
    let result = [];                   // not a reference 

    let isShift = true;

    while (sortedArr.length > 0) {
        if (isShift) {
            result.push(sortedArr.shift());
        } else {
            result.push(sortedArr.pop());
        }
        isShift = !isShift;    //shift between false and true
    }                              //in order to work with odd count arrays
    return result;
}
console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));