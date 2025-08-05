function areaOfFfigures(input) {
    let figure = input[0];

    if (figure === "square") {
        let a = Number(input[1]);
        let area = a * a;
        console.log(area.toFixed(3));
    } else if (figure === "rectangle") {
        let a = Number(input[1]);
        let b = Number(input[2]);
        let area = a * b;
        console.log(area.toFixed(3));
    } else if (figure === "circle") {
        let r = Number(input[1]);
        // let area = Math.PI * r * r;
        let area = Math.PI * Math.pow(r, 2)
        console.log(area.toFixed(3));
    } else {
        let a = Number(input[1]);
        let h = Number(input[2]);
        let area = a * h / 2;
        console.log(area.toFixed(3));

    }
}