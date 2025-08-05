function printNthElement(arr) {
    let lastElement = Number(arr[arr.length - 1]);
    let newArr = [];

    for (let i = 0; i < arr.length -1 ; i += lastElement){
        newArr.push(arr[i]);
    }
    console.log(newArr.join(" "));
}
printNthElement(['5', '20', '31', '4', '20', '2'])
printNthElement(['dsa', 'asd', 'test', 'test', '2'])
printNthElement(['1', '2', '3', '4', '5', '6'])
