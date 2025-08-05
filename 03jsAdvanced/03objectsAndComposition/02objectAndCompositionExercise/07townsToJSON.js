function townsToJSON(arr) {
    let obj = {};
    let arrOfObjects = [];
    arr.shift()

    for (let line of arr) {
        let town = line.split("|")[1].trim();
        let latitude = Number(line.split("|")[2]).toFixed(2);
        let longitude = Number(line.split("|")[3]).toFixed(2);
        obj["Town"] = town;
        obj["Latitude"] = Number(latitude)
        obj["Longitude"] = Number(longitude);
        arrOfObjects.push(obj);
        obj = {};
    }

    console.log(JSON.stringify(arrOfObjects));
}
townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);