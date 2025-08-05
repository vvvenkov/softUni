function cleverLilly(input) {
    let age = Number(input[0])
    let savings = Number(input[1]);
    let toyPrice = Number(input[2]);

    let cash = 0;
    let stolenMoney = -1;
    let toys = 0;
    let addCash = 0;

    for (let i = 0; i <= age; i++){
        if (i % 2 !== 0){
            toys++;
        } else {
            stolenMoney++;
            cash += addCash;
            addCash += 10;
        }
    }

    let diff = Math.abs((cash - stolenMoney) + (toys * toyPrice) - savings)
    
    if ((cash - stolenMoney) + (toys * toyPrice) >= savings) {
        console.log("Yes! " + diff.toFixed(2));
    } else {
        console.log("No! " + diff.toFixed(2));
    } 
}
cleverLilly(["10",
"170.00",
"6"])
