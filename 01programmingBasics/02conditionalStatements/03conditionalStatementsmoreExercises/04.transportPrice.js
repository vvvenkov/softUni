function transportPrice(input) {
    let km = Number(input[0]);
    let timeOfDay = input[1];

    let transport = 0;

    if (km < 20) {
        if (timeOfDay === "day") {
            transport = 0.70 + (km * 0.79);
        } else {
            transport = 0.70 + (km * 0.90);
        }
    } else if (km >= 20 && km < 100) {
        if (timeOfDay === "day") {
            transport = km * 0.09;
        } else {
            transport = km * 0.09;
        }
    } else {
        (km >= 100)
        if (timeOfDay === "day") {
            transport = km * 0.06;
        } else {
            transport = km * 0.06;
        }
    }
    console.log(transport.toFixed(2));
}