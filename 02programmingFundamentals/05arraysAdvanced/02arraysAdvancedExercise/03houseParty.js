function houseParty(arr) {
    let myList = [];

    for (let el of arr) {
        let commands = el.split(" is ");
        let names = commands[0];
        let attend = commands[1];

        if (attend === "going!" && myList.includes(names)) {
            console.log(`${names} is already in the list!`);
        } else if (attend === "going!") {
            myList.push(names);
        }
        if (attend === "not going!" && !myList.includes(names)) {
            console.log(`${names} is not in the list!`);
        } else if (attend === "not going!") {
            myList.splice(myList.indexOf(names))
        }
    }
    console.log(myList.join("\n"));
}
houseParty(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!'])
console.log("----------------------------------");
houseParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!'])