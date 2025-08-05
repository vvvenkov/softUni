function shopping(input) {
    let peterBudget = Number(input[0]);
    let videoCardCount = Number(input[1]);
    let processorCount = Number(input[2]);
    let memoryCount = Number(input[3]);

    let videoCardSum = videoCardCount * 250;

    let processorPrice = videoCardSum * 0.35;
    let processorSum = processorCount * processorPrice;

    let memoryPrice = videoCardSum * 0.10;
    let memorySum = memoryCount * memoryPrice;

    let totalSum = videoCardSum + processorSum + memorySum;

    if (videoCardCount > processorCount) {
        totalSum = totalSum * 0.85;
    }

    let diff = Math.abs(peterBudget - totalSum);

    if (peterBudget >= totalSum) {
        console.log(`You have ${diff.toFixed(2)} leva left!`)
    } else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva more!`)
    }
}