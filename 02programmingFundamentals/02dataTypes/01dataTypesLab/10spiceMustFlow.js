function spiceMustFlow(startyield) {
    let totalyileded = 0;
    let numOfDays = 0;

    while (startyield >= 100) {
        totalyileded += startyield;        
        startyield -= 10;
        numOfDays++;
        totalyileded -= 26;
    }
    
    if (totalyileded < 26){
        totalyileded = 0;
    } else {
        totalyileded -= 26;
    }

    console.log(numOfDays);
    console.log(totalyileded);
}
spiceMustFlow([450])