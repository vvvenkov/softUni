function truckDriver(input) {
    let season = input[0];
    let kilometersPerMonth = Number(input[1]);
    let priceKm = 0;
    if (kilometersPerMonth <= 5000) {
        if (season === "Spring" || season === "Autumn") {
            priceKm = 0.75;
        } else if (season === "Summer") {
            priceKm = 0.90;
        } else if (season === "Winter") {
            priceKm = 1.05;
        }
    } else if (kilometersPerMonth <= 10000) {
        if (season === "Spring" || season === "Autumn") {
            priceKm = 0.95;
        } else if (season === "Summer") {
            priceKm = 1.10;
        } else if (season === "Winter") {
            priceKm = 1.25;
        }
    } else if (kilometersPerMonth <= 20000) {
        priceKm = 1.45;
    }
    let beforeTax = (priceKm * kilometersPerMonth) * 4;
    let afterTax = beforeTax * 0.90;
    console.log(afterTax.toFixed(2));
}
truckDriver(["Summer", 3455])