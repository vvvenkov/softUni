function oddOccurences(input) {

    let map = new Map();
    let words = input.split(" ");

    for (let word of words) {
        if (!map.has(word.toLowerCase())) {
            map.set(word.toLowerCase(), 1)
        } else {
            map.set(word.toLowerCase(), map.get(word.toLowerCase()) + 1)
        }
    }

    let arr = [];

    for (let el of map) {
        if (el[1] % 2 !== 0) {
            arr.push(el[0])
        }
    }
    console.log(arr.join(" "));
}
oddOccurences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')