function fuelTank2(input) {
    let fuel = input[0];
    let liters = Number(input[1]);
    let card = input[2];

    if (fuel === "Gasoline") {
        if (card === "No") {
            fuel = 2.22;
        } else {
            fuel = 2.04;
        }
    } else if (fuel === "Diesel") {
        if (card === "No") {
            fuel = 2.33;
        } else {
            fuel = 2.21
        }
    } else if (fuel === "Gas") {
        if (card === "No") {
            fuel = 0.93;
        } else {
            fuel = 0.85;
        }
    }
    if (liters >= 20 && liters <= 25) {
        fuel = fuel - (fuel * 0.08);
    } else if (liters > 25) {
        fuel = fuel - (fuel * 0.10);
    }
    console.log(`${(liters * fuel).toFixed(2)} lv.`);
}