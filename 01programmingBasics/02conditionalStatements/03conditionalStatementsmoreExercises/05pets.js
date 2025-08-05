function pets(input) {
    let days = Number(input[0]);
    let kgFood = Number(input[1]);
    let perDayDogFoodKg = Number(input[2]);
    let perDayCatFoodKg = Number(input[3]);
    let perDayTurtleFoodGr = Number(input[4]);

    let dogFood = days * perDayDogFoodKg;
    let catFood = days * perDayCatFoodKg;
    let turtleFood = days * (perDayTurtleFoodGr / 1000)
    let totalFood = dogFood + catFood + turtleFood;
    let foodLeft = Math.abs(kgFood - totalFood);
    if (totalFood <= kgFood) {
        console.log(`${Math.floor(foodLeft)} kilos of food left.`);
    } else {
        console.log(`${Math.ceil(foodLeft)} more kilos of food are needed.`);
    }
}
