function bombNumber(arr1, arr2) {
    let number = Number(arr2[0]);
    let power = Number(arr2[1]);

    let result = 0;
    let curNum = 0;

    for (let i = 0; i < arr1.length; i++) {
        curNum = arr1[i];
        
        if (curNum === number) {
            arr1.splice(i - power, power + 1)
            arr1.splice(i - power, power) 
        }
    }
    
    for (let el of arr1){
        result += el;
    }
    console.log(result);

}
bombNumber([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2])
bombNumber([1, 4, 4, 2, 8, 9, 1],
    [9, 3])
bombNumber([1, 7, 7, 1, 2, 3],
    [7, 1])
bombNumber([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1])
