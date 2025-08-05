function safePasswordGenerator(input) {

    let a = Number(input[0]);
    let b = Number(input[1]);
    let maxPasses = Number(input[2]);
    
    let result = "";
    let iterate = 0;
    let addSecond = 0;
    let boolean = false;
    let add1 = 0;
    let add2 = 0;
    let add3 = 0;
    let add4 = 0;

    for (let i = 0; i < maxPasses; i++) {
        if (boolean) {
            break;
        }
        for (let y = 35 + add1; y <= 57;) {
            result += String.fromCharCode(y);
            if (y >= 55) {
                add1 = -1;
            }
            break;
        }
        for (let j = 64 + add2; j <= 98;) {
            result += String.fromCharCode(j)
            if (j >= 96) {
                add2 = -1;
            }
            break;
        }
        for (let k = 1 + iterate; k <= a; k++) {
            result += String(k);
            for (let l = 1 + addSecond; l <= b; l++) {
                result += String(l);
                if (l === b) {
                    iterate++;
                    addSecond = -1;
                    l = 1;
                    if (k === a) {
                        boolean = true;
                        break;
                    }
                }
                addSecond++;
                break;
            }
            break;
        }
        for (let m = 64 + add3; m <= 98;) {
            result += String.fromCharCode(m)
            if (m >= 96) {
                add3 = -1;
            }
            break;
        }
        for (let n = 35 + add4; n <= 57;) {
            result += String.fromCharCode(n)
            if (n >= 55) {
                add4 = -1;
            }
            break;
        }
        add1++;
        add2++;
        add3++;
        add4++;
        result += "|"
    }
    console.log(result);
}
safePasswordGenerator([2, 3, 10])