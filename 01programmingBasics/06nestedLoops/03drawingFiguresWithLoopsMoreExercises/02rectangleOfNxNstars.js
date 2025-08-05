function rectangleOfNxXstars(input){
    let n = Number(input[0]);
    let res = "";
    let symbol = "*";

    for (let i = 1; i <= n; i++){
        res += symbol;
    }
    for (let i = 1; i <= n; i++){
        console.log(res);
    }
}
rectangleOfNxXstars([4])