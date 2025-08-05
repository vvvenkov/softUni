function foodDelivery(input) {
    chickenMenus = Number(input[0]);
    fishMenus = Number(input[1]);
    vegMenus = Number(input[2]);

    chickenMenusPrice = chickenMenus * 10.35
    fishMenusPrice = fishMenus * 12.40;
    vegMenusPrice = vegMenus * 8.15;
    totalMenusPrice = chickenMenusPrice + fishMenusPrice + vegMenusPrice;
    desertPrice = totalMenusPrice * 0.2;
    deliveryPrice = 2.50;
    totalOrderPrice = totalMenusPrice + desertPrice + deliveryPrice

    console.log(totalOrderPrice)
}