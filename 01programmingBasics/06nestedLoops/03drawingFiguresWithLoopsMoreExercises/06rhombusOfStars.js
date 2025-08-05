function rhombusOfStars(input) {
    let n = Number(input[0]);

    for (let i = 0; i < n - 1; i++) {
        let res = "";
        for (let j = n - 1; j > i; j--) {
            res += " ";
        }
        for (let k = 0; k <= i; k++) {
            res += "* ";
        }
        console.log(res);
    }
    for (let i = n - 1; i >= 0; i--) {
        let res = "";
        for (let j = n; j > i + 1; j--) {
            res += " ";
        }
        for (let k = 0; k <= i; k++) {
            res += "* " 
        }
        console.log(res);
    }
}
rhombusOfStars([5])