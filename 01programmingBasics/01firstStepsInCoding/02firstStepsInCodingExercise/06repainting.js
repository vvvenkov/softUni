function repainting(input) {
    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let thiner = Number(input[2]);
    let workHours = Number(input[3]);

    let nylonPrice = (nylon + 2) * 1.50;
    let additionalPaint = paint * 0.1
    let paintPrice = (paint + additionalPaint) * 14.50;
    let thinerPrice = thiner * 5.00;
    let plasticBags = 0.40
    let totalMaterialPrice = nylonPrice + paintPrice + thinerPrice + plasticBags;
    let workPay = (totalMaterialPrice * 0.30) * workHours;
    let totalPrice = workPay + totalMaterialPrice;
    console.log(totalPrice);
}