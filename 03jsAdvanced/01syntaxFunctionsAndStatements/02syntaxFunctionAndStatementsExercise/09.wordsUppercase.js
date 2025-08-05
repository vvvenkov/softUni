function wordsUppercase(input) {
    let pattern = /\w+/g
    let newArr = [];
    let match = pattern.exec(input);

    while (match !== null) {
        newArr.push(match);
        match = pattern.exec(input);
    }

    console.log(newArr.join(", ").toUpperCase());
}
wordsUppercase('Hi, how are you?')
