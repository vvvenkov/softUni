function timeToWalk(steps, footLength, speedKm) {

    let distance = steps * footLength;      //calcute the distance
    let speedMsPerSec = speedKm / 3.6;      //convert km/h to m/s
    let time = distance / speedMsPerSec;      //get the total seconds
    let restCount = Math.floor(distance / 500);     //calculate the rests that occur every 500 meters
    time += restCount * 60;                          //add the rests to the total

    let seconds = Math.round(time % 60);      //get the seconds
    let minutes = Math.floor(time / 60);         //get the minutes
    let hours = Math.floor(time / 60 / 60)       //get the hours

    //if anything is below 10, it has to have a 0 at the beginning
    //has to be double digits
    let secondsUnder10 = seconds < 10 ? `0${seconds}` : `${seconds}`;
    let minutesUnder10 = minutes < 10 ? `0${minutes}` : `${minutes}`;  //short-hand conditional statements
    let hoursUnder10 = hours < 10 ? `0${hours}` : `${hours}`;

    console.log(`${hoursUnder10}:${minutesUnder10}:${secondsUnder10}`);
}
timeToWalk(4000, 0.60, 5)