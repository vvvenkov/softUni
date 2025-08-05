function playingCards(face, suit) {

    let facesArr = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

    if (!facesArr.includes(face)) {
        throw new Error("Invalid face");
    }

    switch (suit) {
        case "S": suit = "\u2660"; break;
        case "H": suit = "\u2665"; break;
        case "D": suit = "\u2666"; break;
        case "C": suit = "\u2663"; break;
    }

    return {
        face: face,
        suit: suit,
        toString: function () {
            return `${face.toString().toUpperCase()}${suit.toString().toUpperCase()}`;
        }
    }
}
playingCards("A", "S");