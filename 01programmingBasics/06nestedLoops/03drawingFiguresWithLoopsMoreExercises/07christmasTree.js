function christmasTree(input) {
    let n = Number(input[0]);
    let string = "";
    let counter = n;

    for (let i = 0; i <= n; i++) {
        for (let j = counter; j > 0; j--) {
            string += " ";
        }
        for (let k = 0; k < i; k++) {
            string += "*";
        }
        string += " | ";
        for (let h = n; h > counter; h--) {
            string += "*";
        }
        for (let y = counter; y > 0; y--) {
            string += " ";
        }
        console.log(string);
        string = "";
        counter--;
    }
}
christmasTree([9])