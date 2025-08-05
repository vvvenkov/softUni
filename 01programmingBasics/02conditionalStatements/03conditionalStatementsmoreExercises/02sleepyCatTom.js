function sleepyTom(input) {
    let daysOff = Number(input[0]);
    let totalDaysOff = daysOff * 127;

    let workDays = 365 - daysOff;
    let totalWorkDays = workDays * 63;
    let totalPlayTime = totalWorkDays + totalDaysOff;
    let minutesLeft = Math.abs(30000 - totalPlayTime);
    let hoursPlayTime = Math.floor(minutesLeft / 60);
    let minutesPlayTime = minutesLeft % 60;

    if (totalPlayTime > 30000) {
        console.log("Tom will run away");
        console.log(`${hoursPlayTime} hours and ${minutesPlayTime} minutes more for play`);
    } else {
        console.log("Tom sleeps well");
        console.log(`${hoursPlayTime} hours and ${minutesPlayTime} minutes less for play`);
    }
}