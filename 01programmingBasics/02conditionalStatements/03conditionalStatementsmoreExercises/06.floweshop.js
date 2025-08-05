function flowerShop(input) {
    let magnolias = Number(input[0]) * 3.25;
    let zombils = Number(input[1]) * 4;
    let roses = Number(input[2]) * 3.50;
    let cactuses = Number(input[3]) * 8;
    let giftPrice = Number(input[4]);

    let totalPrice = magnolias + zombils + roses + cactuses;
    let tax = totalPrice * 0.05;
    let profit = totalPrice - tax;
    let difference = Math.abs(giftPrice - profit);

    if (profit >= giftPrice) {
        console.log(`She is left with ${Math.floor(difference.toFixed(2))} leva.`);
    } else {
        console.log(`She will have to borrow ${Math.ceil(difference.toFixed(2))} leva.`);
    }
}
flowerShop([2,
    3,
    5,
    1,
    50])