function loadingBar(n) {
    let bar = [];
    let barPusher = barPush(n, bar);
    let print =                         printBar(n, bar);

    function barPush(n, bar) {
        switch (n) {
            case 0: bar.push(".........."); break;
            case 10: bar.push("%........."); break;
            case 20: bar.push("%%........"); break;
            case 30: bar.push("%%%......."); break;
            case 40: bar.push("%%%%......"); break;
            case 50: bar.push("%%%%%....."); break;
            case 60: bar.push("%%%%%%...."); break;
            case 70: bar.push("%%%%%%%..."); break;
            case 80: bar.push("%%%%%%%%.."); break;
            case 90: bar.push("%%%%%%%%%."); break;
            case 100: bar.push("%%%%%%%%%%"); break;
        }
    }
    function printBar(n, bar) {
        if (n < 100) {
            console.log(`${n}% [${bar}]`);
            console.log("Still loading...");
        } else {
            console.log("100% Complete!");
            console.log(`[${bar}]`);
        }
    }
}
loadingBar(30
    )