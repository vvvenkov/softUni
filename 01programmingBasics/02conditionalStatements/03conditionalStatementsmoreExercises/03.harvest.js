function harvest(input) {
    let km2 = Number(input[0]);
    let perkm2 = Number(input[1]);
    let vine = Number(input[2]);
    let workers = Number(input[3]);

    let totalVine = km2 * perkm2;
    let vineMade = totalVine * 0.40 / 2.5;
    let vineLeft = vineMade - vine;
    let vineNeeded = vine - vineMade;
    let vinePerWorker = (vineLeft / workers);

    if (vineMade >= vine) {
        console.log(`Good harvest this year! Total wine: ${vineMade} liters.`);
        console.log(`${vineLeft} liters left -> ${Math.ceil(vinePerWorker)} liters per person.`);
    } else {
        console.log(`It will be a tough winter! More ${Math.trunc(vineNeeded)} liters wine needed.`);
    }
}