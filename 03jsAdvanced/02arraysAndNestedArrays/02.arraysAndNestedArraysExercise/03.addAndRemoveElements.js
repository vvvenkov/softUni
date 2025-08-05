function addAndRemoveElements(arr) {
    let command = null;
    let newArr = [];
    let counter = 1;

    for (let i = 0; i < arr.length; i++) {
        command = arr[i];

        switch (command) {
            case "add": newArr.push(counter), counter++; break;
            case "remove": newArr.pop(), counter++; break;
        }
    }

    newArr.length === 0 ? console.log("Empty") : console.log(newArr.join("\n"));

}
addAndRemoveElements(['remove',
    'remove',
    'remove']
)