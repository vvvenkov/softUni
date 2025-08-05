function meetings(input){
    let map = new Map();

    for (let line of input){
        let [day, name] = line.split(" ");

        if (!map.has(day)){
            map.set(day, name)
            console.log(`Scheduled for ${day}`);
        } else {
            console.log(`Conflict on ${day}!`);
        }
    }
    
    for (let el of map){
        console.log(`${el[0]} -> ${el[1]}`);
    }
}
meetings(['Monday Peter',
 'Wednesday Bill',
 'Monday Tim',
 'Friday Tim'])