function newHome(input) {
    let typeOfFlowers = input[0];
    let numberOfFlowers = Number(input[1]);
    let budget = Number(input[2]);
    let price = 0.00;

    switch (typeOfFlowers) {
        case "Roses":
            price = numberOfFlowers * 5.00;
            if (numberOfFlowers > 80) {
                price = price * 0.90;
            }
            break;
        case "Dahlias":
            price = numberOfFlowers * 3.80;
            if (numberOfFlowers > 90) {
                price = price * 0.85;
            }
            break;
        case "Tulips":
            price = numberOfFlowers * 2.80;
            if (numberOfFlowers > 80) {
                price = price * 0.85;
            }
            break;
        case "Narcissus":
            price = numberOfFlowers * 3.00;
            if (numberOfFlowers < 120) {
                price = price * 1.15;
            }
            break;
        case "Gladiolus":
            price = numberOfFlowers * 2.50;
            if (numberOfFlowers < 80) {
                price = price * 1.20;
            }
            break;

    }
    if (budget >= price) {
        console.log(`Hey, you have a great garden with ${numberOfFlowers} ${typeOfFlowers} and ${(budget - price).toFixed(2)} leva left.`);

    } else {
        console.log(`Not enough money, you need ${(price - budget).toFixed(2)} leva more.`)
    }
}