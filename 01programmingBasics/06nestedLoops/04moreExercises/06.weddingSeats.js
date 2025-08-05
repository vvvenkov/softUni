function weddingSeats(input) {

    let lastSector = Number(input[0].charCodeAt());
    let firstSectorRows = Number(input[1]);
    let oddNumberSeats = Number(input[2]);
    let numberOfSeats = 0;

    for (let i = 65; i <= lastSector; i++) {
        firstSectorRows++;
        for (let y = 1; y < firstSectorRows; y++) {
            if (y % 2 === 0) {
                for (let k = 97; k < (97 + oddNumberSeats) + 2; k++) {
                    console.log(`${String.fromCharCode(i)}${y}${String.fromCharCode(k)}`);
                    numberOfSeats++;
                }
            } else {
                for (let j = 97; j < 97 + oddNumberSeats; j++) {
                    console.log(`${String.fromCharCode(i)}${y}${String.fromCharCode(j)}`);
                    numberOfSeats++;
                }
            }
        }
    }
    console.log(numberOfSeats);
}
weddingSeats(["B", 3, 2])