function catDiet(input) {
    let fatPercentage = Number(input[0]);
    let proteinPercentage = Number(input[1]);
    let carbPercentage = Number(input[2]);
    let totalCalories = Number(input[3]);
    let totalWater = Number(input[4]);

    let totalGramFats = (totalCalories * (fatPercentage * 0.01)) / 9;
    let totalGramProtein = (totalCalories * (proteinPercentage * 0.01)) / 4;
    let totalGramCarbs = (totalCalories * (carbPercentage * 0.01)) / 4;

    let totalfoodWeight = totalGramCarbs + totalGramFats + totalGramProtein;
    let calPerGram = totalCalories / totalfoodWeight;

    let waterCalories = calPerGram * (totalWater * 0.01);
    let caloriesPerGram = calPerGram - waterCalories


    console.log(caloriesPerGram.toFixed(4));

}
catDiet([60,
    25,
    15,
    2500,
    60])