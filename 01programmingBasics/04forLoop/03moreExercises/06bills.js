function bills(input) {
    let average = Number(input[0]);
    let waterBill = 0;
    let internetBill = 0;
    let misc = 0;
    let electric = 0;
    let miscTotal = 0;
    let monthlyElectricity = 0;
    for (let i = 1; i <= average; i++) {
        monthlyElectricity = Number(input[i]);

        electric += monthlyElectricity
        waterBill += 20;
        internetBill += 15;
        misc = (monthlyElectricity + 20 + 15) * 1.20;
        miscTotal += misc;
    }

    let total = (electric + waterBill + internetBill + miscTotal) / average;

    console.log("Electricity: " + electric.toFixed(2) + " lv");
    console.log("Water: " + waterBill.toFixed(2) + " lv");
    console.log("Internet: " + internetBill.toFixed(2) + " lv");
    console.log("Other: " + miscTotal.toFixed(2) + " lv");
    console.log("Average: " + total.toFixed(2) + " lv");
}
bills([5,
    68.63,
    89.25,
    132.53,
    93.53,
    63.22])