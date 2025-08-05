function partyTime(input) {
    let guestList = {
        vip: [],
        regular: []
    }

    let partyCounter = input.indexOf("PARTY")

    for (let number of input) {
        let firstChar = number[0];

        if (number == "PARTY") {
            break;
        }

        if (firstChar.charCodeAt() >= 48 && firstChar.charCodeAt() <= 57) {
            guestList["vip"].push(number);
        } else {
            guestList["regular"].push(number);
        }
    }

    for (let i = partyCounter; i < input.length; i++) {

        let vipIndex = guestList["vip"].indexOf(input[i]);
        let regIndex = guestList["regular"].indexOf(input[i]);
        
        if (guestList["vip"].includes(input[i])) {
            guestList["vip"].splice(vipIndex, 1)
        }
        if (guestList["regular"].includes(input[i])) {
            guestList["regular"].splice(regIndex, 1);
        }
    }

    console.log(guestList["vip"].length + guestList["regular"].length);

    for (let el of guestList["vip"]) {
        console.log(el);
    }
    for (let el of guestList["regular"]) {
        console.log(el);
    }
}
partyTime(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
])