function passwordValidator(password) {
    lengthCheck(password);
    charCheck(password);
    digitCheck(password);

    function lengthCheck(password) {
        if (password.length >= 6 && password.length <= 10) {
            lengthCheck = true;
            return;
        } else {
            console.log("Password must be between 6 and 10 characters");
        }
    }

    function charCheck(password) {
        for (let i = 0; i < password.length; i++) {
            let pass = password[i].charCodeAt();
            if (pass > 47 && pass < 58) {
                continue;
            } else if (pass > 64 && pass < 91) {
                continue;
            } else if (pass > 96 && pass < 123) {
                continue;
            } else {
                console.log("Password must consist only of letters and digits");
                return;
            }
        }
        charCheck = true;
        return;
    }

    function digitCheck(password) {
        let digitCounter = 0;
        for (let i = 0; i < password.length; i++) {
            let pass = password[i].charCodeAt();

            if (pass > 47 && pass < 58) {
                digitCounter++;
            }
        }
        if (digitCounter > 1) {
            digitCheck = true;
            return;
        } else {
            console.log("Password must have at least 2 digits");
        }
    }

    if (lengthCheck === true && charCheck === true && digitCheck === true) {
        console.log("Password is valid");
    } else {
        return;
    }
}
passwordValidator("Pa$s$s")