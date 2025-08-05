function negativeOrPositive(arr) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        let currentNum = Number(arr[i]);

        if (currentNum < 0) {
            newArr.unshift(currentNum);
        } else {
            newArr.push(currentNum)
        }
    }
    console.log(newArr.join("\n"));
}
negativeOrPositive(['7', '-2', '8', '9'])