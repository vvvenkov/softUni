function computerFirm(input) {
    let numberComputers = Number(input[0]);
    let index = 1;
    let n = String(input[index]);
    let raiting = "";
    let sells = 0;
    let totalSells = 0;
    let averageRaiting = 0;
    let possiblesells = 0;

    for (let i = 0; i < numberComputers; i++) {
        raiting = Number(n[2]);
        possiblesells = String(`${n[0]}${n[1]}`);
        possiblesells = Number(possiblesells);

        if (raiting === 2) {
            sells += possiblesells * 0.00;
        } else if (raiting === 3) {
            sells += possiblesells * 0.50; 
        } else if (raiting === 4) {
            sells += possiblesells * 0.70;
        } else if (raiting === 5) {
            sells += possiblesells * 0.85
        } else if (raiting === 6) {
            sells += possiblesells * 1.00
        }

        averageRaiting += raiting;

        index++;
        n = String(input[index]);
    }

    console.log(sells.toFixed(2));
    console.log((averageRaiting / numberComputers).toFixed(2));
}
computerFirm([5, 122, 156, 202, 214, 185])