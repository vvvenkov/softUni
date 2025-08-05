function division(num) {
    let result = 0;

    if (num % 10 === 0) {
        result = 10;
    } else if (num % 7 === 0) {
        result = 7;
    } else if (num % 6 === 0) {
        result = 6;
    } else if (num % 3 === 0) {
        result = 3;
    } else if (num % 2 === 0) {
        result = 2;
    } else {
        console.log("Not divisible");
    }

    if (result === 2) {
        console.log("The number is divisible by 2");
    } else if (result === 3) {
        console.log("The number is divisible by 3");
    } else if (result === 6) {
        console.log("The number is divisible by 6");
    } else if (result === 7) {
        console.log("The number is divisible by 7");
    } else if (result === 10) {
        console.log("The number is divisible by 10");
    }
}
division(1643)