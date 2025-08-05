function bonusPoints(input) {
    let initialPoints = Number(input[0]);
    let bonus = 0;

    if (initialPoints <= 100) {
        bonus = 5;
    } else if (initialPoints <= 1000) {
        bonus = initialPoints * 0.2;
    } else {
        bonus = initialPoints * 0.1;
    }

    if (initialPoints % 2 === 0) {
        bonus = bonus + 1;
    } else if (initialPoints % 10 === 5) {
        bonus = bonus + 2;
    }
    console.log(bonus);
    console.log(bonus + initialPoints);
}