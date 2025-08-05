function rotateArray(arr) {
    let rotations = Number(arr.pop());
    let curr = "";

    for (let i = 0; i < rotations; i++) {
        curr = arr.pop()
        arr.unshift(curr)
    }
    console.log(arr.join(" "));
}
rotateArray(['1', '2', '3', '4', '2'])
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15'])
