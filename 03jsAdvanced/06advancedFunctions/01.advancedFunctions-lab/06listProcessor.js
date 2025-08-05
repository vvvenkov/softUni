function listProcessor(arr) {
    let collection = [];

    function processor() {
        arr.forEach(str => {
            let [command, value] = str.split(" ");

            switch (command) {
                case 'add': collection.push(value); break;
                case 'remove': collection = collection.filter(el => el !== value); break;
                case 'print': console.log(collection.join(","));
            }
        });
        
        return collection;
    }
    return processor();
}
listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);