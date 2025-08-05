function letterCombinations(input) {
    let startLetter = Number(input[0].charCodeAt());
    let endLetter = Number(input[1].charCodeAt());
    let skipLetter = Number(input[2].charCodeAt())
    let combo = "";
    let combinationsCount = 0;

    for (let i = startLetter; i <= endLetter; i++) {
        for (let y = startLetter; y <= endLetter; y++){
            for (let j = startLetter; j <= endLetter; j++){
                if (i !== skipLetter && y !== skipLetter && j !== skipLetter){
                    let char1 = String.fromCharCode(i);    //String.fromCharCode("a".charCodeAt() + (i - 97));//??? why??
                    let char2 = String.fromCharCode(y);
                    let char3 = String.fromCharCode(j);
                    combo += (`${char1}${char2}${char3} `)
                    combinationsCount++;
                }
            }
        }
    }
    console.log(combo + combinationsCount);
}
letterCombinations(["a", "b", "c"])