function swimminngRecord(input) {
    let recordSec = Number(input[0]);
    let distanceMeters = Number(input[1]);
    let timeSec = Number(input[2]);

    let totalSwim = (distanceMeters * timeSec);
    let addMeters = Math.trunc(distanceMeters / 15.);
    let addTime = addMeters * 12.5;
    let totalTime = (totalSwim + addTime);
    let timeLeft = Math.abs(totalTime - recordSec);

    if (recordSec <= totalTime) {
        console.log(`No, he failed! He was ${timeLeft.toFixed(2)} seconds slower.`)
    } else {
        (recordSec > totalTime)
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`)
    }
}