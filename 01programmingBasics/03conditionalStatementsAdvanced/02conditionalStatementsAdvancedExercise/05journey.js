function vacation(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let vacationExpense = 0;
    let vacationType;
    let vacation;

    if (budget <= 100) {
        vacation = "Somewhere in Bulgaria";
        if (season === "summer") {
            vacationExpense = budget * 0.30;
            vacationType = "Camp"
        } else {
            (season === "winter")
            vacationExpense = budget * 0.70;
            vacationType = "Hotel"
        }
    } else if (budget <= 1000) {
        vacation = "Somewhere in Balkans";
        if (season === "summer") {
            vacationExpense = budget * 0.40;
            vacationType = "Camp"
        } else {
            (season = "winter")
            vacationExpense = budget * 0.80;
            vacationType = "Hotel"
        }
    } else {
        (budget > 1000)
        vacation = "Somewhere in Europe";
        vacationType = "Hotel"
        if (season === "summer") {
            vacationExpense = budget * 0.90;
        } else {
            (season === "winter")
            vacationExpense = budget * 0.90;
        }

    } console.log(vacation)
    console.log(`${vacationType} - ${vacationExpense.toFixed(2)}`)
}