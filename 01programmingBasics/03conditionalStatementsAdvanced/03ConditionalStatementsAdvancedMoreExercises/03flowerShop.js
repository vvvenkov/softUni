function flowerShop(input) {
    let hrisantemas = Number(input[0]);
    let roses = Number(input[1]);
    let lallets = Number(input[2]);
    let season = input[3];
    let holiday = input[4];

    let hrisantemasPrice = 0;
    let rosesPrice = 0;
    let lalletsPrice = 0;

    if (season === "Spring" || season === "Summer") {
        hrisantemasPrice = 2.00;
        rosesPrice = 4.10;
        lalletsPrice = 2.50;
    } else if (season === "Autumn" || season === "Winter") {
        hrisantemasPrice = 3.75;
        rosesPrice = 4.50;
        lalletsPrice = 4.15;
    }
    let bouqeut = (hrisantemas * hrisantemasPrice) + (roses * rosesPrice) + (lallets * lalletsPrice);
    if (holiday === "Y") {
        bouqeut = bouqeut * 1.15;
    }
    if (season === "Spring" && lallets > 7) {
        bouqeut = bouqeut * 0.95;
    }
    if (season === "Winter" && roses >= 10) {
        bouqeut = bouqeut * 0.90;
    }
    if (hrisantemas + roses + lallets > 20) {
        bouqeut = bouqeut * 0.80;
    }
    console.log((bouqeut + 2).toFixed(2));
}
flowerShop([10,
    10,
    10,
    "Autumn",
    "N"])