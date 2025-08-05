function addAndRemove(arr) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "add") {
            newArr.push(i + 1)
        } else {
            newArr.pop(i - 1)
        }
    }

    if (newArr.length > 0) {
        console.log(newArr.join(" "));
    } else {
        console.log("Empty");
    }
}
addAndRemove(["add", "add", "add", "add"])
addAndRemove(['add', 'add', 'remove', 'add', 'add'])
addAndRemove(['remove'])

