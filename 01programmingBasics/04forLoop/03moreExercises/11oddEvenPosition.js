function oddEvenPosition(input) {
    let numbers = Number(input[0]);
    let oddSum = 0;
    let oddMin = Number.MAX_SAFE_INTEGER;
    let oddMax = Number.MIN_SAFE_INTEGER;
    let evenSum = 0;
    let evenMin = Number.MAX_SAFE_INTEGER;
    let evenMax = Number.MIN_SAFE_INTEGER;

    for (let i = 1; i <= numbers; i++) {
        let currentNum = Number(input[i]);
        if (i % 2 === 0) {
            evenSum += currentNum;
            if (currentNum > evenMax) {
                evenMax = currentNum;
            }
            if (currentNum < evenMin) {
                evenMin = currentNum;
            }
        } else if (i % 2 !== 0) {
            oddSum += currentNum;
            if (currentNum > oddMax) {
                oddMax = currentNum;
            }
            if (currentNum < oddMin) {
                oddMin = currentNum;
            }
        }
    }
    console.log("OddSum=" + oddSum.toFixed(2) + ",");
    if (oddMin === Number.MAX_SAFE_INTEGER) {
        console.log("OddMin=No, ");
    } else {
        console.log("OddMin=" + oddMin.toFixed(2) + ",");
    }
    if (oddMax === Number.MIN_SAFE_INTEGER) {
        console.log("OddMax=No,");
    } else {
        console.log("OddMax=" + oddMax.toFixed(2) + ",");
    }
    console.log("EvenSum=" + evenSum.toFixed(2) + ",");
    if (evenMin === Number.MAX_SAFE_INTEGER) {
        console.log("EvenMin=No, ");
    } else {
        console.log("EvenMin=" + evenMin.toFixed(2) + ",");
    }
    if (evenMax === Number.MIN_SAFE_INTEGER) {
        console.log("EvenMax=No");
    } else {
        console.log("EvenMax=" + evenMax.toFixed(2));
    }
}
oddEvenPosition([0])