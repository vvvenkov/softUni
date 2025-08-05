function wordsTracker(input) {
    let words = input[0].split(" ");
    let map = new Map();
    let counter = 0;

    for (let word of words) {
        for (let search of input) {
            if (!map.has(word) && search === word) {
                map.set(word, counter = 1);
            } else if (map.has(word) && search === word) {
                map.set(word, counter + map.get(word, counter));
            }
        }
    }
    let sorted = Array.from(map).sort((a, b) => a[0] - b[0])
    for (let el of sorted){
        console.log(`${el[0]} -> ${el[1]}`);
    }
}
wordsTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
])