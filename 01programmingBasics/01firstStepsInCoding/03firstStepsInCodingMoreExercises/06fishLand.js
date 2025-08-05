function fishLand(input) {

    let mackerel = Number(input[0]);
    let sprat = Number(input[1]);
    let palamudKg = Number(input[2]);
    let safridKg = Number(input[3]);
    let scalopsKg = Number(input[4]);

    let palamud = mackerel * 1.60;
    let totalPalamud = palamudKg * palamud;
    let safrid = sprat * 1.80;
    let totalSafrid = safridKg * safrid;
    let totalScalops = scalopsKg * 7.50;
    let totalBill = totalPalamud + totalSafrid + totalScalops;
    console.log(totalBill.toFixed(2));

}