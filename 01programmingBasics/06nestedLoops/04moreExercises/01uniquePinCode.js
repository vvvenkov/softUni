function uniquePinCode(input) {
    let firstNum = Number(input[0]);
    let secondNum = Number(input[1]);
    let thirdNum = Number(input[2]);
    let res = "";
    
    for (let a = 0; a < 1; a++) {
        for (let i = 0; i <= firstNum; i++) {
            for (let y = 0; y <= secondNum; y++) {
                for (let j = 0; j <= thirdNum; j++) {
                    if ((i % 2 === 0 && i !== 0) && (y >= 2 && y <= 7 && y !== 4 && y !== 6) && (j % 2 === 0 && j !== 0)) {
                        console.log(`${i} ${y} ${j}`);
                    }
                }
            }
        }
    }
}
uniquePinCode([3, 5, 5])