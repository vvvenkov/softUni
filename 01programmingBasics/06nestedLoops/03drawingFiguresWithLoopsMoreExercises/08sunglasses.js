function sunGlasses(input) {
    let n = Number(input[0]);
    let string = "";

    for (let i = 0; i < n; i++) {
        if (i === 0 || i === n - 1) {
            for (let j = 0; j < 2 * n; j++) {
                string += "*";
            }
            for (let k = 0; k < n; k++) {
                string += " ";
            }
            for (let y = 0; y < 2 * n; y++) {
                string += "*";
            }
        } else {
            if (i - 1 === ((n - 1) / 2 - 1) || i === (n / 2 - 1)) {
                for (let n = 0; n < 1; n++) {
                    string += "*";
                }
                for (let k = 0; k < 2 * n - 2; k++) {
                    string += "/";
                }
                for (let j = 0; j < 1; j++) {
                    string += "*";
                }
                for (let g = 0; g < n; g++) {
                    string += "|";
                }
                for (let n = 0; n < 1; n++) {
                    string += "*";
                }
                for (let k = 0; k < 2 * n - 2; k++) {
                    string += "/";
                }
                for (let n = 0; n < 1; n++) {
                    string += "*";
                }
            } else {
                for (let n = 0; n < 1; n++) {
                    string += "*";
                }
                for (let k = 0; k < 2 * n - 2; k++) {
                    string += "/";
                }
                for (let j = 0; j < 1; j++) {
                    string += "*";
                }
                for (let g = 0; g < n; g++) {
                    string += " ";
                }
                for (let n = 0; n < 1; n++) {
                    string += "*";
                }
                for (let k = 0; k < 2 * n - 2; k++) {
                    string += "/";
                }
                for (let n = 0; n < 1; n++) {
                    string += "*";
                }
            }
        }
        console.log(string);
        string = "";
    }
}
sunGlasses([5])