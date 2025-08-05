function printAndSum(num1, num2) {
    let sum = 0;
    let buff = "";
    for (let start = num1; start <= num2; start++) {
        sum += start;
        buff += start + " ";
    }
    console.log(buff);
    console.log("Sum: " + sum);
}
printAndSum(5, 10)