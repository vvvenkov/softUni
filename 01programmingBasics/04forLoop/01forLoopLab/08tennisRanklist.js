function tennisRanklist(input) {
    let tournaments = Number(input[0]);
    let initialPoints = Number(input[1]);
    let points = 0;
    let winCount = 0;

    for (let i = 2; i < input.length; i++) {
        let tournamentStage = input[i];

        if (tournamentStage === "W") {
            points += 2000;
            winCount++;
        } else if (tournamentStage === "F") {
            points += 1200;
        } else if (tournamentStage === "SF") {
            points += 720;
        }
    }

    let averagePoints = points / tournaments;
    let averageWon = winCount / tournaments;

    console.log("Final points: " + Math.trunc(points + initialPoints));
    console.log("Average points: " + Math.trunc(averagePoints));
    console.log((averageWon * 100).toFixed(2) + "%");
}
tennisRanklist(["5",
    "1400",
    "F",
    "SF",
    "W",
    "W",
    "SF"])