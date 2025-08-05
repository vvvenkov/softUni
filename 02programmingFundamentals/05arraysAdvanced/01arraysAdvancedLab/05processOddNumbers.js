function processOddNumbers(arr) {
    let filteredElements = arr.filter((el, i) => i % 2 === 1);

    let doubledNumbers = filteredElements.map(x => x * 2);

    let reversed = doubledNumbers.reverse();

    console.log(reversed.join(" "));
}
processOddNumbers([10, 15, 20, 25])