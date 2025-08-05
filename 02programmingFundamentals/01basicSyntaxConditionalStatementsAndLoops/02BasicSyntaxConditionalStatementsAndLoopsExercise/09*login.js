function login(input) {
    let index = 0;
    let username = input[index];
    index++;
    let password = String(input[index]);
    let res = "";
    let triesCount = 0;

    for (let y = 0; y < input.length - 1; y++) {
        triesCount++;
        for (let i = password.length -1; i >= 0; i--) {
            res += String(password[i]);
        }
        if (res === username) {
            console.log(`User ${username} logged in.`);
            break;
        } else if (triesCount > 3) {
            console.log(`User ${username} blocked!`);
            break;
        }
        console.log("Incorrect password. Try again.");
        index++;
        password = input[index];
        res = "";
    }
}
login(['Acer','login','go','let me in','recA'])
