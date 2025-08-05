function characterInRange(char1, char2) {

    let charToCode1 = char1.charCodeAt(0);
    let charToCode2 = char2.charCodeAt(0);
    let buff = " ";
    let smallest = smalletsInRange(charToCode1, charToCode2);
    let biggest = biggestInRange(charToCode1, charToCode2);

    for (let i = smallest + 1; i < biggest; i++) {
        buff += String.fromCharCode(i) + " ";
    }

    console.log(buff);
    function smalletsInRange(char1, char2) {
        return (Math.min(char1, char2))
    }
    function biggestInRange(char1, char2) {
        return (Math.max(char1, char2))
    }
}
characterInRange("#", ":")