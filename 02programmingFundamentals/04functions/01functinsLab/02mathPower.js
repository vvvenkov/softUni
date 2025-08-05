function mathPower(num, power) {
    let res = num;
    for (let i = 1; i < power; i++) {       //function to make the calculation 
        res *= num;
    }

    function printRes(res) {    //function to Print the result 
        console.log(res);
    }
    printRes(res);

}
mathPower(2, 8)