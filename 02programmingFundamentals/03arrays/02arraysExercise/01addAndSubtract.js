function addAndSubtract(arr) {
    let newArr = [];
    let oldArrSum = 0;
    let newArrSum = 0;

    for (let el of arr) {
        oldArrSum += el;
    }
    for (let i = 0; i < arr.length; i++) {
        let currentNum = arr[i];
        if (currentNum % 2 === 0) {
            currentNum += i;
            newArr.push(currentNum)
            newArrSum += currentNum;
        } else {
            currentNum -= i;
            newArr.push(currentNum)
            newArrSum += currentNum;
        }
    }
    console.log(newArr);
    console.log(oldArrSum);
    console.log(newArrSum);
}
addAndSubtract([5, 15, 23, 56, 35])
console.log("-------------------------------------//");
addAndSubtract([-5, 11, 3, 0, 2])