function distinctArray(arr){
    let newArr = [];

    for (let i = 0; i < arr.length; i++){
        if (newArr.includes(arr[i])){
        } else {
            newArr.push(arr[i]);
        }
    }
    console.log(newArr.join(" "));
}
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])