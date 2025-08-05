function wordOccurences(input) {
    let assocArr = {};

    for (let word of input) {        
        if (!assocArr.hasOwnProperty(word)) {
            assocArr[word] = 1;
        } else {
            assocArr[word]++;
        }
    }

    let sorted = Object.entries(assocArr).sort((a, b) => b[1] - a[1]);
    
    for (let key of sorted) {
        console.log(`${key[0]} -> ${key[1]} times`);
    }
}
wordOccurences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])