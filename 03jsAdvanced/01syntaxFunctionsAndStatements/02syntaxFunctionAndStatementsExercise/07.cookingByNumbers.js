function cookingByNumber(num, op1, op2, op3, op4, op5, op6) {
    num = Number(num);
    arr = [op1, op2, op3, op4, op5, op6];

    for (let i = 0; i < arr.length - 1; i++) {
        let op = arr[i];

        switch (op) {
            case "chop": num = num / 2; break;
            case "dice": num = Math.sqrt(num); break;
            case "spice": num = num + 1; break;
            case "bake": num = num * 3; break;
            case "fillet": num = num * 0.80; break;
        }

        if (!Number.isInteger(num)) {
            num = num.toFixed(1)
        }
        console.log(num);
    }
}
cookingByNumber('9', 'dice', 'spice', 'chop', 'bake', 'fillet')