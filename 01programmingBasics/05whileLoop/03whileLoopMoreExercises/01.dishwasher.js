function dishwasher(input) {
    let index = 1;
    let detergent = Number(input[0]);
    let detergentMl = detergent * 750;
    let command = input[index];
    let dishesCount = 0;
    let totalDishes = 0;
    let potsCount = 0;

    while (command !== "End") {
        dishesCount++;
        let dishes = Number(command);

        if (dishesCount % 3 !== 0) {
            detergentMl -= dishes * 5;
            totalDishes += dishes;
        }
        if (dishesCount % 3 === 0) {
            detergentMl -= dishes * 15;
            potsCount += dishes;
        }
        index++;
        command = input[index];

        if (detergentMl < 0){
            break;
        }
    }
    if (detergentMl >= 0){
        console.log(`Detergent was enough!`);
        console.log(`${totalDishes} dishes and ${potsCount} pots were washed.`);
        console.log(`Leftover detergent ${detergentMl} ml.`);
    } else {
        console.log(`Not enough detergent, ${Math.abs(detergentMl)} ml. more necessary!`);
    }
}
dishwasher([1,
    10,
    15,
    10,
    12,
    13,
    30])