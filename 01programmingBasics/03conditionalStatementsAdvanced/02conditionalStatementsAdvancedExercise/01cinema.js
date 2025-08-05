function movies(input) {
    let movie = input[0];
    let rols = Number(input[1]);
    let cols = Number(input[2]);
    let income = 0;

    if (movie === "Premiere") {
        income = (rols * cols) * 12;
    } else if (movie === "Normal") {
        income = (rols * cols) * 7.50;
    } else {
        (movie === "Discount")
        income = (rols * cols) * 5.00;
    }
    console.log(`${income.toFixed(2)}`)
}