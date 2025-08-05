function backToThePast(input) {
    let inheritance = Number(input[0]);
    let year = Number(input[1]);
    let age = 17;

    for (let i = 1800; i <= year; i++){
        if (i % 2 === 0){
            age++;
            inheritance -= 12000;
        } else {
            age++;
            inheritance -= 12000 + (age * 50);
        }
    }
    
    let diff = Math.abs(inheritance);

    if (inheritance < 0){
        console.log(`He will need ${diff.toFixed(2)} dollars to survive.`);
    } else {
        console.log(`Yes! He will live a carefree life and will have ${inheritance.toFixed(2)} dollars left.`);
    }
}
backToThePast(["50000",
    "1802"])