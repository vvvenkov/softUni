function reverseString(word){
    let res = "";

    for (let i = word.length - 1; i >= 0; i--){
        let currentLetter = word[i];
        res += currentLetter;
    }
    console.log(res);
}
reverseString("Hello")