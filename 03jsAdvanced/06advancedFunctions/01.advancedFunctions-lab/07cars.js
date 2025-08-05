function cars(arr) {
    let collection = [];

    for (let str of arr) {
        let [command, name, property, attribute] = str.split(' ');
        let obj = {};

        if (command === 'create') {
            if (property === 'inherit') {
                find = (collection.find(obj => obj.name === attribute))
                obj = Object.create(find);
                obj.name = name;
            } else {
                obj.name = name;
            }
            collection.push(obj)
        }
        if (command === 'set') {
            if (property === 'color') {
                find = collection.find(obj => obj.name === name);
                find.color = attribute
            } else if (property === 'model') {
                find = collection.find(obj => obj.name === name);
                find.model = attribute;
            }
        }
        if (command === 'print') {
            find = collection.find(obj => obj.name === name)
            console.log(find.name);
        }
    }
    console.table(collection)
}
cars(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2'])
