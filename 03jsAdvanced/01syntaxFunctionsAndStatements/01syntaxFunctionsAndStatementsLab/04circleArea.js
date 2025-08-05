function circleArea(area) {
    let type = typeof(area);

    if (type === "number") {                                     //check for value Type
       console.log((Math.pow(area, 2) * Math.PI).toFixed(2));    //how to calculate a circle's Area
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${type}.`);
    }
}
circleArea("5")