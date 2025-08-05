function yardGreening(input) {
    let squareMeter = Number(7.61)
    let price = (input[0]) * squareMeter
    let discount = 0.18 * price
    let finalPrice = price - discount;
    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}