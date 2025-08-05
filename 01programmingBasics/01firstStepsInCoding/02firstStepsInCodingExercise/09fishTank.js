function fishTank(input) {
    let cmLenght = Number(input[0]);
    let cmWidth = Number(input[1]);
    let cmHeight = Number(input[2]);
    let percent = Number(input[3]);

    let tankDimensions = cmLenght * cmWidth * cmHeight // = cubic centimeters
    let literage = tankDimensions * 0.001;
    let space = (input[3]) / 100;
    let afterDecorLiterage = literage * (1 - space);

    console.log(afterDecorLiterage);
}