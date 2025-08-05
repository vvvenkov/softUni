function employes(input) {
    let obj = {};
    
    for (let name of input) {
        obj[name] = name.length;
    }
    
    for (let key of Object.keys(obj)) {
        console.log(`Name: ${key} -- Personal number: ${obj[key]}`);
    }
    //-------------------this won't repeat same names
}
employes([
    'Silas Butler',
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
])

console.log("--------------------------");

function employes2(input) {

    let res = [];
    for (let name of input) { 
        let obj = {
            name: name,
            length: name.length
        }
        res.push(obj)
    }
    for (let el of res){
        console.log(`Name: ${el.name} -- Personal number: ${el.length}`);
    }
    //------------- this will repeat the same names
}
employes2([
    'Silas Butler',
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
])