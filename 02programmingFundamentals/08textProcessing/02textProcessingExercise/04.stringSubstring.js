function stringSubstring(word, text) {
    let arrOfText = text.split(" ");

    for (let search of arrOfText) {
        if (search.toLowerCase() === word.toLowerCase()) {
            console.log(word);
            return;
        }
    }
    console.log(word + " not found!");
}
stringSubstring('javascript',
    'javaScript is the best programming language')