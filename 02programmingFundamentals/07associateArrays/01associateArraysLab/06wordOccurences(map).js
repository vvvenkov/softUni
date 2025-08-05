function wordOccurences(input) {

    let map = new Map();

    for (let el of input) {
        if (!map.has(el)) {
            map.set(el, 1)
        } else {
            map.set(el, map.get(el) + 1)
        }
    }
    let sorted = Array.from(map).sort((a, b) => b[1] - a[1]);

    for (let el of sorted){
        console.log(`${el[0]} -> ${el[1]} times`);
    }
}
wordOccurences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])