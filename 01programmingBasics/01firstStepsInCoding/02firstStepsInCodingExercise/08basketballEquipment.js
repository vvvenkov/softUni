function basketballEquipment(input) {
    let basketTax = Number(input[0]);

    let sneakers = basketTax - (basketTax * 0.4);
    let jersey = sneakers - (sneakers * 0.2);
    let ball = jersey / 4;
    let accessories = ball / 5;
    let totalPrice = Number(input[0]) + sneakers + jersey + ball + accessories;

    console.log(totalPrice);
}