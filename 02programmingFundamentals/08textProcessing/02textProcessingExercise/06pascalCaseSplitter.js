function pascalCaseSplitter(string) {
    let arr = [];
    let startIndex = 0;

    for (let i = 1; i < string.length; i++) {
        let curChar = string[i];
        if (curChar.charCodeAt() >= 65 && curChar.charCodeAt() <= 90) {
            arr.push(string.substring(startIndex, i))
            startIndex = i;
        }
    }
    arr.push(string.substring(startIndex))
    console.log(arr.join(", "));
}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')