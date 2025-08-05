function squareOfStart(size) {
    let string = "";

    for (let i = 0; i < size; i++) {
        for (let y = 0; y < size; y++) {
            string += "* ";
        }
        console.log(string);
        string = "";
    }
}
squareOfStart(5)