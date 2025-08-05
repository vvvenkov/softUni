function phoneBook(input){

    let map = new Map()

    for (let line of input){
        let [name, number] = line.split(" ");
        map.set(name, number)
    }

    for (let [key, value] of map){
        console.log(`${key} -> ${value}`);
    }
}
phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344'])