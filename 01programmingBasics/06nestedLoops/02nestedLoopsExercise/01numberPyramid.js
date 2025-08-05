function numberPyramid(input){
    let n = Number(input[0]);
    let res = "";
    let boolean;
    let current = 1;
    for (i = 1; i <= n; i++){
        for (let j = 1; j <= i; j++){
            res += current + " ";
            current++;
            if (current > n){
                boolean = true;
                break;
            }
        }
        console.log(res);
        res = "";
        if (boolean){
            break;
        }
    }
}
numberPyramid(["7"])