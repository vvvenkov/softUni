function gladiatorExpenses(fightsLost, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let repairCost = 0;
    let shieldCount = 0;
    for (let i = 1; i <= fightsLost; i++) {
        if (i % 2 === 0) {
            repairCost += helmetPrice
        }
        if (i % 3 === 0) {
            repairCost += swordPrice;
        }
        if (i % 6 === 0) {
            repairCost += shieldPrice;
            shieldCount;
        }
        if (i % 12 === 0) {
            repairCost += armorPrice;
        }
    }
    console.log(`Gladiator expenses: ${repairCost.toFixed(2)} aureus`);
}
gladiatorExpenses(23,
    12.50,
    21.50,
    40,3,
    200)