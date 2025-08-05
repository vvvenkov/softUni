function godzillaVsKong(input) {
    let budget = Number(input[0]);
    let actors = Number(input[1]);
    let clothesPerActor = Number(input[2]);

    let decorSum = budget * 0.10;
    let totalClothes = actors * clothesPerActor;
    let clothesDiscount = totalClothes * 0.10;

    if (actors >= 150) {
        totalClothes = totalClothes - clothesDiscount;
    }

    let totalFilmExpense = (decorSum + totalClothes);
    let moneyLeft = Math.abs(budget - totalFilmExpense);       //Math.abs - винаги изкарва положително число


    if (totalFilmExpense > budget) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${moneyLeft.toFixed(2)} leva more.`);
    } else if (totalFilmExpense <= budget) {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`);
    } else if (moneyLeft === 0) {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`);
    }

}