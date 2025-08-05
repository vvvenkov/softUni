function binaryToDecimal(num) {
    let res = 0;
    let counter = 0;

    for (let i = num.length - 1; i >= 0; i--) {
        let currentNum = Number(num[i]);
        if (currentNum === 1 && counter < 1) {
            res += 1;
        } else {
            res += 0;
        }
        if (currentNum === 1 && counter === 1) {
            res += 2;
        } else {
            res += 0;
        }
        if (currentNum === 1 && counter === 2) {
            res += 4;
        } else {
            res += 0;
        }
        if (currentNum === 1 && counter === 3) {
            res += 8;
        } else {
            res += 0;
        }
        if (currentNum === 1 && counter === 4) {
            res += 16;
        } else {
            res += 0;
        }
        if (currentNum === 1 && counter === 5) {
            res += 32;
        } else {
            res += 0;
        }
        if (currentNum === 1 && counter === 6) {
            res += 64;
        } else {
            res += 0;
        }
        if (currentNum === 1 && counter === 7) {
            res += 128;
        } else {
            res += 0;
        }
        if (currentNum === 1 && counter === 8) {
            res += 256;
        } else {
            res += 0;
        }
        counter++;
    }
    console.log(res);
}
binaryToDecimal("00001001")