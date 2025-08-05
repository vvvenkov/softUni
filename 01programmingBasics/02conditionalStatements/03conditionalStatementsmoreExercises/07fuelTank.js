function fuelTank(input) {
    let fuel = input[0];
    let liters = Number(input[1]);

    if (liters >= 25) {
        if (fuel === "Diesel") {
            console.log("You have enough diesel.");
        } else if (fuel === "Gasoline") {
            console.log("You have enough gasoline.");
        } else if (fuel === "Gas") {
            console.log("You have enough gas.");
        } else {
            console.log("Invalid fuel!");
        }
    } else {
        if (fuel === "Diesel") {
            console.log("Fill your tank with diesel!");
        } else if (fuel === "Gasoline") {
            console.log("Fill your tank with gasoline!");
        } else if (fuel === "Gas") {
            console.log("Fill your tank with gas!");
        } else {
            console.log("Invalid fuel!");
        }
    }
}