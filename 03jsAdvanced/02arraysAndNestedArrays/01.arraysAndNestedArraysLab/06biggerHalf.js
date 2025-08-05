function biggerHalf(arr) {
    arr.sort((a, b) => a - b);

    let middle = arr.length / 2;
    let result = arr.slice(middle); 
    
    console.log(result);
}
biggerHalf([4,7,2,5])