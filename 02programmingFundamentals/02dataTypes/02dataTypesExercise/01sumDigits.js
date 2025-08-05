function sumDigits(num){
    num = num.toString()
    sum = 0;
    for (let i = 0; i < num.length; i++){
        let digits = Number(num[i]);    
        sum += digits;
    }
    console.log(sum);
}
sumDigits(543)