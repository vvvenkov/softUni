function reportSystem(input) {
    let index = 0;
    let sum = Number(input[index]);
    index++;
    let cashCounter = 0;
    let cardCounter = 0;
    let command = input[index];
    let totalCash = 0;
    let totalCard = 0;
    let totalSum = 0;
    let cashCardCounter = 0;
    while (command !== "End") {
        let money = Number(command);
        cashCardCounter++;
        if (cashCardCounter % 2 !== 0) {
            if (money > 100) {
                console.log("Error in transaction!");
            } else {
                console.log("Product sold!");
                totalCash += money;
                totalSum += money;
                cashCounter++;
            }
        } else {
            if (money < 10) {
                console.log("Error in transaction!");
            } else {
                console.log("Product sold!");
                totalCard += money;
                totalSum += money;
                cardCounter++;
            }
        }
        if (totalSum >= sum) {
            console.log(`Average CS: ${(totalCash / cashCounter).toFixed(2)}`);
            console.log(`Average CC: ${(totalCard / cardCounter).toFixed(2)}`);
            break;
        }
        index++;
        command = input[index];
    }
    if (totalSum < sum) {
        console.log("Failed to collect required money for charity.");
    }
}
reportSystem(["600",
    "86",
    "150",
    "98",
    "227",
    "End"
])