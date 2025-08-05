function squareOfStars(input){
    let res = "";
    let symbol = "*";
    let n = Number(input[0]);

    for (let i = 0; i < n; i++){
        res += symbol + " ";
    }
    for (let i = 0; i < n; i++){
        console.log(res);
    }
}
squareOfStars([5])