function carToGo(input){
    let budget = Number(input[0]);
    let season = input[1];
    let carClass;
    let carType;
    let price = 0;

    if (budget <= 100){
        carClass = "Economy class"
        if (season === "Summer"){
            carType = "Cabrio";
            price = budget * 0.65;
        } else if (season === "Winter"){
            carType = "Jeep";
            price = budget * 0.35;
        }
    } else if (budget <= 500){
        carClass = "Compact class"
        if (season === "Summer"){
            carType = "Cabrio";
            price = budget * 0.55;
        } else if (season === "Winter"){
            carType = "Jeep";
            price = budget * 0.20;
        }
    } else if (budget > 500){
        carClass = "Luxury class"
        carType = "Jeep";
        price = budget * 0.10;
    }
    console.log(carClass);
    console.log(`${carType} - ${(budget - price).toFixed(2)}`);
}
carToGo([450, "Summer"])