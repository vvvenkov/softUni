function logistics(input) {
    let index = 1;
    let deliveries = Number(input[0]);
    let vanPrice = 0;
    let truckPrice = 0;
    let trainPrice = 0;
    let totalWeigth = 0;
    let truckTons = 0;
    let vanTons = 0;
    let trainTons = 0;

    for (let i = 1; i <= deliveries; i++) {
        let tons = Number(input[i]);

        if (tons <= 3) {
            vanPrice += tons * 200;
            totalWeigth += tons;
            vanTons += tons
        } else if (tons <= 11) {
            truckPrice += tons * 175;
            totalWeigth += tons;
            truckTons += tons;
        } else if (tons >= 12) {
            trainPrice += tons * 120;
            totalWeigth += tons;
            trainTons += tons;
        }
    }
    console.log(((vanPrice + truckPrice + trainPrice) / totalWeigth).toFixed(2));
    console.log(((vanTons / totalWeigth) * 100).toFixed(2) + "%");
    console.log(((truckTons / totalWeigth) * 100).toFixed(2) + "%");
    console.log(((trainTons / totalWeigth) * 100).toFixed(2) + "%");
}
logistics(["4", "1", "5", "16", "3"])
