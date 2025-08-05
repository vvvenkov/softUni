function vegetableMarket(input){
    let kgVegies = Number(input[0]);
    let kgFruits = Number(input[1]);
    let totalKgVegies = Number(input[2]);
    let totalKgFruits = Number(input[3]);

    let vegiesPrice = kgVegies * totalKgVegies;
    let fruitsPrice = kgFruits * totalKgFruits;
    let sum = vegiesPrice + fruitsPrice;

    let euro = sum / 1.94

    console.log(euro.toFixed(2));
}