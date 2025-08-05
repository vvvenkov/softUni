function fishBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let anglers = Number(input[2]);

    let rent = 0;

    switch (season) {
        case "Spring":
            rent = 3000;
            break;
        case "Summer":
            rent = 4200;
            break;
        case "Autumn":
            rent = 4200;
            break;
        case "Winter":
            rent = 2600;
            break;
    }

    if (anglers <= 6) {
        rent = rent * 0.90;
    } else if (anglers >= 7 && anglers <= 11) {
        rent = rent * 0.85;
    } else {
        (anglers > 12);
        rent = rent * 0.75;
    }

    if (anglers % 2 === 0 && season !== "Autumn") {
        rent = rent * 0.95;
    }

    if (budget >= rent) {
        console.log(`Yes! You have ${(budget - rent).toFixed(2)} leva left.`);
    } else {
        (rent > budget)
        console.log(`Not enough money! You need ${(rent - budget).toFixed(2)} leva.`);
    }
}