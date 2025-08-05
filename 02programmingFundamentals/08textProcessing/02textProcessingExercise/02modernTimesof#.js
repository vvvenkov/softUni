function modernTimesOfHashTag(string) {
    let words = string.split(" ");
    boolean = false;

    for (let word of words) {
        if (word.startsWith("#") && word.length > 1) {
            word = word.substring(1)
            for (let ch of word) {
                if ((ch.charCodeAt() >= 65 && ch.charCodeAt() <= 90) || (ch.charCodeAt() >= 97 && ch.charCodeAt() <= 122)) {
                    boolean = false;
                } else {
                    boolean = true;
                    break;
                }
            }
            if (boolean) {
                continue;
            } else {
                console.log(word);
            }
        }
    } 
}
modernTimesOfHashTag('Nowadays everyone uses # to tag a #speci4al word in #socialMedia'
)