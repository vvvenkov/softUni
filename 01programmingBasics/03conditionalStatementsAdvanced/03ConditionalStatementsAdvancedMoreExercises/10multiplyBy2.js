function multiplyBy2(input) {
    let index = 0;
    let num = Number(input[index]);

    while (num !== input.length){
        if (num >= 0){
            console.log("Result: " + (num * 2).toFixed(2));
        }    
        if (num < 0){
            console.log("Negative number!");
            break;
        }
        index++
        num = Number(input[index]);
    }
}
multiplyBy2([
    12,
    43.2144,
    12.3,
    543.23,
    -20])