function skiTrip(input) {

    let days = Number(input[0]);
    let roomType = input[1];
    let rating = input[2];

    let nights = days - 1;

    switch (roomType) {
        case "room for one person":
            price = nights * 18.00;
            break;

        case "apartment":
            if (days < 10) {
                price = (nights * 25.00) * 0.70;
            } else if
                (days >= 10 && days <= 15) {
                price = (nights * 25.00) * 0.65;
            } else {
                (days > 15)
                price = (nights * 25.00) * 0.50;
            }
            break;

        case "president apartment":
            if (days < 10) {
                price = (nights * 35.00) * 0.90;
            } else if
                (days >= 10 && days <= 15) {
                price = (nights * 35.00) * 0.85;
            } else {
                (days > 15)
                price = (nights * 35.00) * 0.80;
            }
            break;
    }

    if (rating === "positive") {
        price = price * 1.25;
    } else {
        (rating === "negative")
        price = price * 0.90;
    }
    console.log(price.toFixed(2))
}