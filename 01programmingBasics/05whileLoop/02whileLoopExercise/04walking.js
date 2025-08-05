function walking(input) {
    let index = 0;
    let command = input[index];
    index++;

    let boolean = false;
    let sumOfSteps = 0;

    while (command !== "Going home") {
        let steps = Number(command);
        sumOfSteps += steps;

        if (sumOfSteps >= 10000) {
            boolean = true;
            break;
        }
        command = input[index];
        index++;
    }
    if (command === "Going home") {
        command = Number(input[index]);
        index++;
        sumOfSteps += command;
    }
    if (boolean) {
        console.log(`Goal reached! Good job!`);
        console.log(`${sumOfSteps - 10000} steps over the goal!`);
    } else if (sumOfSteps < 10000) {
        console.log(`${10000 - sumOfSteps} more steps to reach goal.`);
    } else {
        console.log(`Goal reached! Good job!`);
        console.log(`${sumOfSteps - 10000} steps over the goal!`);
    }
}
walking(["1500",
    "300",
    "2500",
    "3000",
    "Going home",
    "200"])

