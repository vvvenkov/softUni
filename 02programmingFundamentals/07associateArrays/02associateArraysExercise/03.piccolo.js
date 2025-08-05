function piccolo(input) {
    let set = new Set();

    for (let line of input) {
        let [direction, car] = line.split(", ")

        if (direction == "IN") {
            set.add(car);
        } else {
            set.delete(car)
        }
    }

    let sorted = Array.from(set).sort((a, b) => a[1].localeCompare(b[1]))

    if (set.size == 0) {
        console.log("Parking Lot is Empty");
    } else {
        for (let el of sorted) {
            console.log(el[1]);
        }
    }
}
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA'])