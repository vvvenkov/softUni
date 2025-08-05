function vacation(input) {
    let index = 0;
    let budget = Number(input[index]);
    index++;
    let cash = Number(input[index]);
    index++;
    let action = input[index];
    index++;
    let money = Number(input[index]);
    index++;

    let boolean = false;
    let dayCount = 0;
    let spendCount = 0;
    while (action < "undefined") {
        if (action === "spend") {
            spendCount++;
            dayCount++;
            cash = Math.abs(cash - money);
        } else {
            spendCount = 0;
            dayCount++;
            cash = Math.abs(cash + money);
        }
        if (spendCount === 5) {
            boolean = true;
            break;
        }
        action = input[index];
        index++;
        money = Number(input[index]);
        index++;
    }

    if (boolean) {
        console.log("You can't save the money.");
        console.log(dayCount);
    }

    if (cash >= budget) {
        console.log(`You saved the money for ${dayCount} days.`);
    }
}
vacation(["2000",
    "1000",
    "spend",
    "1200",
    "save",
    "2000"])