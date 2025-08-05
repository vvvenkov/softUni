function squareFrame(input) {
    let n = Number(input[0]);

    for (let y = 1; y <= 1; y++) {
        let res = "";
        for (let i = 1; i <= n; i++) {
            if (i === 1 || i === n) {
                res += "+ ";
            } else {
                res += "- "
            }
        }
        console.log(res);
    }
    for (let y = 2; y < n; y++) {
        res = "";
        for (let i = 1; i <= n; i++) {
            if (i === 1 || i === n) {
                res += "| ";
            } else {
                res += "- ";
            }
        }
        console.log(res);
    }
    for (let y = 1; y <= 1; y++) {
        let res = "";
        for (let i = 1; i <= n; i++) {
            if (i === 1 || i === n) {
                res += "+ ";
            } else {
                res += "- "
            }
        }
        console.log(res);
    }

}
squareFrame([10])