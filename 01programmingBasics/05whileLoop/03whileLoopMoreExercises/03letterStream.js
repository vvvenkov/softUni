function letterStreamn(input) {
    let index = 0;
    let currentSymbol = input[index];
    let symbolToAscii = "";

    let cCounter = 0;
    let nCounter = 0;
    let oCounter = 0;
    let string;
    let finalString;

    while (currentSymbol !== "End") {
        symbolToAscii = currentSymbol.charCodeAt();
        if ((symbolToAscii >= 65 && symbolToAscii <= 90) || (symbolToAscii >= 97 && symbolToAscii <= 122)) {
            if (symbolToAscii === 99) {
                if (cCounter === 0) {
                    cCounter++;
                } else {
                    string += currentSymbol;
                }
            } else if (symbolToAscii === 110) {
                if (nCounter === 0) {
                    nCounter++;
                } else {
                    string += currentSymbol;
                }
            } else if (symbolToAscii === 111) {
                if (oCounter === 0) {
                    oCounter++;
                } else {
                    string += currentSymbol;
                }
            } else {
                string += currentSymbol;
            }
        }
        if (cCounter > 0 && nCounter > 0 && oCounter > 0) {
            finalString += string + " ";
            string = "";
            cCounter = 0;
            nCounter = 0;
            oCounter = 0;
        }
        index++;
        currentSymbol = input[index];
    }
    console.log(finalString);
}
letterStreamn(["o",
    "S",
    "%",
    "o",
    "l",
    "^",
    "v",
    "e",
    "c",
    "n",
    "&",
    "m",
    "e",
    "c",
    "o",
    "n",
    "End"])