function addressBook(input){

    let map = new Map();

    for (let line of input){
        let [name, address] = line.split(":");
        map.set(name, address)
    }

    let sorted = Array.from(map)
    sorted.sort((a, b) => a[0].localeCompare(b[0]))

    for (let el of sorted){
        console.log(`${el[0]} -> ${el[1]}`);
    }
}
addressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd'])