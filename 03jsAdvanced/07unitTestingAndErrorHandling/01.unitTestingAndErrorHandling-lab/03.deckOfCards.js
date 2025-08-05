function printDeckOfCards(cards) {

    let result = "";

    for (let card of cards) {
        card = createCard(card);

        if (card === undefined) {
            return;
        }
        result += `${card.toString()} `;
    }

    console.log(result);

    function createCard(card) {
        let face = card.substring(card, card.length - 1).toString();
        let suit = card.substring(card.length - 1, card.length).toString();

        let facesArr = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
        if (!facesArr.includes(face)) {
            return console.log(`Invalid card: ${card}`);
        }
        
        switch (suit) {
            case "S": suit = "\u2660"; break;
            case "H": suit = "\u2665"; break;
            case "D": suit = "\u2666"; break;
            case "C": suit = "\u2663"; break;
            default: return console.log(`Invalid card: ${card}`);
        }

        return `${face}${suit}`
    }
}
printDeckOfCards(['5S', '3D', 'QD', '1C']);