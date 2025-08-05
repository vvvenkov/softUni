function firstAndLastKNumbers(arr) {
    let k = arr.shift();

    let firstK = arr.slice(0, k)
    let secondK = arr.slice(-k)

    console.log(firstK.join(" "));
    console.log(secondK.join(" "));
}
firstAndLastKNumbers([2, 7, 8, 9])
firstAndLastKNumbers([3, 6, 7, 8, 9])