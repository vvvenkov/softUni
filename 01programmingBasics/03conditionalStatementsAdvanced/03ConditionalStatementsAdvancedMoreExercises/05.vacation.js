function vacation(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let typeOfLodging;
    let location;
    let price = 0;

    if (budget <= 1000) {
        typeOfLodging = "Camp";
        if (season === "Summer") {
            location = "Alaska";
            price = budget * 0.65;
        } else {
            location = "Morocco";
            price = budget * 0.45;
        }
    } else if (budget <= 3000) {
        typeOfLodging = "Hut";
        if (season === "Summer") {
            location = "Alaska"
            price = budget * 0.80;
        } else {
            location = "Morocco";
            price = budget * 0.60;
        }
    } else if (budget > 3000) {
        price = budget * 0.90;
        typeOfLodging = "Hotel"
        if (season === "Summer") {
            location = "Alaska";
        } else {
            location = "Morocco";
        }
    }
    console.log(`${location} - ${typeOfLodging} - ${price.toFixed(2)}`);
}
vacation([800, "Summer"])