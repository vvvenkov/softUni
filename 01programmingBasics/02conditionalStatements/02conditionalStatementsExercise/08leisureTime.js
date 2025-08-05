function leisureTime(input) {
    let series = input[0];
    let episodeTime = Number(input[1]);
    let leisureTime = Number(input[2]);

    let lunchTime = leisureTime * 1 / 8;
    let restTime = leisureTime * 1 / 4;
    let timeLeft = leisureTime - lunchTime - restTime;
    let timeAfter = Math.abs(episodeTime - timeLeft);

    if (timeLeft >= episodeTime) {
        console.log(`You have enough time to watch ${series} and left with ${Math.ceil(timeAfter)} minutes free time.`)
    } else if (episodeTime > timeLeft) {
        console.log(`You don't have enough time to watch ${series}, you need ${Math.ceil(timeAfter)} more minutes.`)
    } else {
        (timeLeft > 60)
        console.log()
    }
}