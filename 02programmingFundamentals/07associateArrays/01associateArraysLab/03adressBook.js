function addressBook(arr) {
    let obj = {};

    for (let line of arr){
        let [name, address] = line.split(":");
        obj[name] = address;
    }

    let sortedObj = Object.entries(obj).sort((a, b) => a[0].localeCompare(b[0]))
    for (let [name, address] of sortedObj){
        console.log(`${name} -> ${address}`);
    }
}
addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'])