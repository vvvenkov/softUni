function schoolCamp(input) {
    let season = input[0];
    let groupType = input[1];
    let studentsCount = Number(input[2]);
    let nights = Number(input[3]);
    let price = 0;
    if (season === "Winter") {
        if (groupType === "girls" || groupType === "boys") {
            price = nights * 9.60;
        } else {
            price = nights * 10;
        }
    } else if (season === "Spring") {
        if (groupType === "girls" || groupType === "boys") {
            price = nights * 7.20;
        } else {
            price = nights * 9.50;
        }
    } else if (season === "Summer") {
        if (groupType === "girls" || groupType === "boys") {
            price = nights * 15;
        } else {
            price = nights * 20;
        }
    }

    let finalPrice = price * studentsCount;

    if (studentsCount >= 50) {
        finalPrice = finalPrice * 0.50;
    } else if (studentsCount >= 20) {
        finalPrice = finalPrice * 0.85;
    } else if (studentsCount >= 10) {
        finalPrice = finalPrice * 0.95;
    }
    let sport;
    if (season === "Winter") {
        if (groupType === "girls") {
            sport = "Gymnastics"
        } else if (groupType === "boys") {
            sport = "Judo"
        } else {
            sport = "Ski"
        }
    } else if (season === "Spring") {
        if (groupType === "girls") {
            sport = "Athletics"
        } else if (groupType === "boys") {
            sport = "Tennis"
        } else {
            sport = "Cycling"
        }
    } else if (season === "Summer") {
        if (groupType === "girls") {
            sport = "Volleyball"
        } else if (groupType === "boys") {
            sport = "Football"
        } else {
            sport = "Swimming"
        }
    }
    console.log(`${sport} ${finalPrice.toFixed(2)} lv.`);
}
schoolCamp(["Spring",
    "mixed",
    "17",
    "14"])