function triangleOfNumber(num) {
    for (let i = 0; i <= num; i++) {
        let res = "";
        for (let y = 1; y <= i; y++) {
            res += i + " ";
        }
        console.log(res);
    }
}
triangleOfNumber(3)