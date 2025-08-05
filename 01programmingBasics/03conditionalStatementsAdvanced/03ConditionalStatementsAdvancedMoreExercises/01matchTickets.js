function matchTickets(input) {
    let budget = Number(input[0]);
    let category = input[1];
    let groupCount = Number(input[2]);
    let transport = 0;
    let ticket = 0;

    if (groupCount < 5) {
        transport = (budget * 0.75);
    } else if (groupCount < 10) {
        transport = (budget * 0.60);
    } else if (groupCount < 25) {
        transport = (budget * 0.50);
    } else if (groupCount < 50) {
        transport = (budget * 0.40);
    } else if (groupCount >= 50) {
        transport = (budget * 0.25);
    }

    if (category === "Normal") {
        ticket = 249.99 * groupCount;
    } else if (category === "VIP") {
        ticket = 499.99 * groupCount;
    }

    let moneyLeft = Math.abs(budget - transport);
    let diff = Math.abs(moneyLeft - ticket);

    if (moneyLeft >= ticket){
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
    }
}
matchTickets([30000, "VIP", 49])