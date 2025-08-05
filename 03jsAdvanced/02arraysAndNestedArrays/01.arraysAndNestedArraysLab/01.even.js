function evenPositionElements(arr){
    let string = "";

    for (let i = 0; i < arr.length; i+=2){
        string += String(arr[i] + " ");
    }
    console.log(string);
}
evenPositionElements([20, 30, 40, 50])