function replaceRepeatingChars(string) {

    newArr = [];

    for (let i = 0; i < string.length; i++) {
        let curChar = string[i];
        let nextChar = string[i + 1];

        if (curChar !== nextChar) {
            newArr.push(curChar)
        }
    }
    console.log(newArr.join(""));
}
replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa')