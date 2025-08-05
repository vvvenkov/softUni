function courier(input) {

    let packageWeigth = Number(input[0]);
    let service = input[1];
    let distanceKm = Number(input[2]);
    let price = 0;


    if (packageWeigth < 1) {
        price = distanceKm * 0.03;
    } else if (packageWeigth >= 1 && packageWeigth < 10) {
        price = distanceKm * 0.05;
    } else if (packageWeigth >= 10 && packageWeigth < 40) {
        price = distanceKm * 0.10;
    } else if (packageWeigth >= 40 && packageWeigth < 90) {
        price = distanceKm * 0.15;
    } else if (packageWeigth >= 90 && packageWeigth < 150) {
        price = distanceKm * 0.20;
    }

    if (service === "express") {
        if (packageWeigth < 1) {
            price = price + (packageWeigth * (price * 0.80)) 
        } else if (packageWeigth >= 1 && packageWeigth < 10) {
            price = price + (packageWeigth * (price * 0.40)) 
        } else if (packageWeigth >= 10 && packageWeigth < 40) {
            price = price + (packageWeigth * (price * 0.05)) 
        } else if (packageWeigth >= 40 && packageWeigth < 90) {
            price = price + (packageWeigth * (price * 0.02)) 
        } else if (packageWeigth >= 90 && packageWeigth < 150) {
            price = price + (packageWeigth * (price * 0.01))  
        }
    }

    console.log(`The delivery of your shipment with weight of ${packageWeigth.toFixed(3)} kg. would cost ${price.toFixed(2)} lv.`);

}
courier([87, "express", 130])