function moving(input) {
    let index = 0;
    let spaceWidth = Number(input[index]);
    index++
    let spaceLength = Number(input[index]);
    index++;
    let spaceHeigth = Number(input[index]);
    index++;
    let command = Number(input[index]);
    index++;
    let totalSpace = spaceWidth * spaceLength * spaceHeigth;
    let boolean = false;
    while (command !== "Done") {
        totalSpace -= command;

        if (totalSpace < command && totalSpace < 0) {
            boolean = true;
            break;
        }
        command = input[index];
        index++;
    }
    if (boolean) {
        console.log(`No more free space! You need ${Math.abs(totalSpace)} Cubic meters more.`);
    }
    if (command === "Done") {
        console.log(`${Math.abs(totalSpace)} Cubic meters left.`);
    }
}
moving(["10",
    "1",
    "2",
    "4",
    "6",
    "10",
    "Done"])