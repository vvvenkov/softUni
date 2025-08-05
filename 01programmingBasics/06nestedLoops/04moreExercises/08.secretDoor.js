function secretDoor(input) {
    let maxHundreds = Number(input[0]);
    let maxTens = Number(input[1]);
    let maxOnes = Number(input[2]);

    for (let i = 1; i <= maxHundreds; i++) {
        for (let y = 2; y <= maxTens; y++) {
            for (let j = 2; j <= maxOnes; j++) {
                if (i % 2 === 0 && j % 2 === 0){
                    if ((y % 2 !== 0 || y === 2) && (y ===3 || y % 3 !== 0)){
                        console.log(`${i} ${y} ${j}`);
                    }
                }
            }
        }
    }
}
secretDoor([3,
    5,
    5])