function condenseArraytoNumber(arr) {
    let condenced = [];

    for (let el of arr) {
        condenced.push(el);
    }
    while (condenced.length > 1) {
        let tempArr = [];
        for (let i = 0; i < condenced.length - 1; i++) {
            tempArr[i] = condenced[i] + condenced[i + 1];
        }
        condenced = tempArr;
    }
    console.log(condenced);
}
condenseArraytoNumber([2, 10, 3])
condenseArraytoNumber([5, 0, 4, 1, 2])
condenseArraytoNumber([1])
