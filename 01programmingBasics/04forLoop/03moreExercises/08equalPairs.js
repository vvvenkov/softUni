function equalPairs(input) {
    let numOfPairs = Number(input[0]);
    let pairSum = 0;
    let diff = 0;
    let maxDiff = 0;
    let newPair;
    let oldPair;

    for (let i = 1; i < input.length; i++) {
        pairSum += Number(input[i]);

        if (i % 2 === 0) {
            newPair = pairSum;
            if (oldPair !== newPair) {
                if (oldPair > newPair) {
                    diff = oldPair - newPair;
                } else if (newPair > oldPair) {
                    diff = newPair - oldPair;
                }
            }
            if (diff > maxDiff) {
                maxDiff = diff;
            }
            pairSum = 0;
            oldPair = newPair;
        }
    }

    if (diff === 0) {
        console.log("Yes, value=" + newPair);
    } else {
        console.log("No, maxdiff=" + diff);
    }
}
equalPairs([2,
    -1,
    0,
    0,
    -1])