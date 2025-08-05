function maxNumber(arr) {
    let newArr = [];
    let isBigger = false;

    for (let i = 0; i < arr.length - 1; i++) {
        let currentInteger = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            let nextInteger = arr[j];
            if (currentInteger > nextInteger) {
                isBigger = true;
            } else {
                isBigger = false;
                break;
            }
        }
        if (isBigger){
            newArr.push(currentInteger);
        }
    }
    newArr.push(arr[arr.length - 1])
    console.log(newArr.join(" "));
}
maxNumber([1, 4, 3, 2])
