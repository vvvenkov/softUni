function fligthSchedule(input) {
    let obj = {};

    let flights = input[0];
    let flightsToChange = input[1];
    let print = String(input[2]);

    let changed = [];
    let unchanged = [];
    let Status = "";
    let codesChanged = [];

    for (let element of flights) {
        let [code, Destination, Destination2] = element.split(" ");
        if (Destination2 !== undefined) {
            Destination = `${Destination} ${Destination2}`
        }

        for (let element2 of flightsToChange) {
            let check = element2.split(" ")[0]

            if (check === code) {
                Status = "Cancelled"
                codesChanged.push(code);
                changed.push({ Destination, Status })
                break;
            }
        }
    }

    for (let element of flights) {
        let [code, Destination, Destination2] = element.split(" ");
        if (Destination2 !== undefined) {
            Destination = `${Destination} ${Destination2}`
        }

        for (let element2 of flightsToChange) {
            let check = element2.split(" ")[0]

            if (codesChanged.includes(check)) {
                Status = "Ready to fly"
                unchanged.push({ Destination, Status })
                break;
            }
        }
    }

    if (print === "Cancelled") {
        for (let el of changed) {
            console.log(el);
        }
    } else {
        for (let el of unchanged) {
            console.log(el);
        }
    }

}
fligthSchedule([['WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'], ['DL2120 Cancelled',
    'WN612 Cancelled',
    'WN1173 Cancelled',
    'SK430 Cancelled'],
['Ready to fly']
])