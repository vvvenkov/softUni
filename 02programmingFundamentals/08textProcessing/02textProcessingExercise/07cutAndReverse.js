function cutAndReverse(string) {
    let arrOfString = string.split("");
    let arr = [];
    let arr2 = [];

    for (let i = arrOfString.length / 2 - 1; i >= 0; i--) {
        arr.push(arrOfString[i])
    }
    for (let i = arrOfString.length; i >= arrOfString.length / 2; i--) {
        arr2.push(arrOfString[i])
    }
    console.log(arr.join(""));
    console.log(arr2.join(""));
}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')
