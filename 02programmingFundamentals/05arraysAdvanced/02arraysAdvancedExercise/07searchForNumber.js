function searchForNumber(arr1, arr2) {

    let numbers = arr2.shift();
    let deleted = arr2.shift();
    let specialNumber = arr2.shift();
    let occurs = 0;

    for (let i = 0; i < 1; i++) {
        arr1.splice(numbers);
        arr1.splice(i, i + deleted);

        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] === specialNumber) {
                occurs++;
            }
        }
    }
    console.log(`Number ${specialNumber} occurs ${occurs} times.`);
}
searchForNumber([5, 2, 3, 4, 1, 6],
    [5, 2, 3])