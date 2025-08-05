function excurrsionSale(input) {
    let seaVacations = Number(input[0]);
    let mountainVacations = Number(input[1]);

    index = 2;
    let vacation = input[index];

    let sum = 0;

    while (vacation !== "Stop") {
        if (vacation === "sea" && seaVacations > 0) {
            sum += 680
            seaVacations -= 1;
        } else if (vacation === "mountain" && mountainVacations > 0) {
            sum += 499
            mountainVacations -= 1;
        }

        if (seaVacations === 0 && mountainVacations === 0) {
            break;
        }

        index++;
        vacation = input[index];
    }

    if (seaVacations === 0 && mountainVacations === 0) {
        console.log(`Good job! Everything is sold.`);
        console.log(`Profit: ${sum} leva.`);
    } else {
        console.log(`Profit: ${sum} leva.`);
    }
}
excurrsionSale([2,
    2,
    "sea",
    "mountain",
    "sea",
    "sea",
    "mountain"])