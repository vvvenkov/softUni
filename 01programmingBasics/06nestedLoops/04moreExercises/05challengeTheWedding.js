function weddings(input) {

    let men = Number(input[0]);
    let women = Number(input[1]);
    let tables = Number(input[2]);
    let tablesCount = 0;
    let result = "";


    for (let x = 0; x <= tables; x++) {
        for (let i = 1; i <= men; i++) {
            for (let y = 1; y <= women; y++) {
                result += (`(${i} <-> ${y}) `);
                tablesCount++;

                if (tablesCount >= tables) {
                    console.log(result);
                    return;
                }
            }
            if (i === men) {
                console.log(result);
                return;
            }
        }
    }
}
weddings([2, 2, 6])