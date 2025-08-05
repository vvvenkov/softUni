function housePaint(input) {
    let heigth = Number(input[0]);
    let length = Number(input[1]);
    let roofLength = Number(input[2]);

    let walls = heigth * length;
    let window = 1.5 * 1.5;
    let sideWalls = (2 * walls) - (2 * window);
    let backWall = heigth * heigth;
    let entrance = 1.2 * 2;
    let frontBackWalls = 2 * backWall - entrance;
    let totalWalls = sideWalls + frontBackWalls;
    let greenPaint = totalWalls / 3.4;
    console.log(greenPaint.toFixed(2));

    let roof = 2 * (length * heigth);
    let triangles = 2 * (heigth * roofLength / 2);
    let totalRoof = roof + triangles;
    let redPaint = totalRoof / 4.3;
    console.log(redPaint.toFixed(2));

}