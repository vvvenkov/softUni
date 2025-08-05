function bikeRace(input) {
    let juniorBikers = Number(input[0]);
    let seniorBikers = Number(input[1]);
    let trackType = input[2];
    let juniorPrice = 0;
    let seniorPrice = 0;
    
    if (trackType === "trail") {
        juniorPrice = 5.50 * juniorBikers;
        seniorPrice = 7 * seniorBikers;
    } else if (trackType === "cross-country") {
        if (juniorBikers + seniorBikers >= 50) {
            juniorPrice = (8 * 0.75) * juniorBikers;
            seniorPrice = (9.50 * 0.75) * seniorBikers;
        } else {
            juniorPrice = 8 * juniorBikers;
            seniorPrice = 9.50 * seniorBikers;
        }
    } else if (trackType === "downhill") {
        juniorPrice = 12.25 * juniorBikers;
        seniorPrice = 13.75 * seniorBikers;
    } else if (trackType === "road") {
        juniorPrice = 20 * juniorBikers;
        seniorPrice = 21.50 * seniorBikers;
    }
    
    let expenses = (juniorPrice + seniorPrice) * 0.05;
    let donations = (juniorPrice + seniorPrice) - expenses;
    console.log(donations.toFixed(2)); 
}
bikeRace([3, 40, "road"])