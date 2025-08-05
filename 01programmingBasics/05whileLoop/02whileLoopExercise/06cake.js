function cake(input){
    let index = 0;
    let cakeHeigth = Number(input[index]);
    index++;
    let cakeLength = Number(input[index]);
    index++;
    let cake = cakeHeigth * cakeLength;
    let command = Number(input[index]);
    index++;
    let boolean = false;
    let piecesEaten = 0;

    while (command !== "STOP"){
        cake -= command;
        piecesEaten += Number(command);

        if (cake <= 0){
            boolean = true;
            break;
        }
        command = input[index];
        index++;
    } 
    if (boolean){
        console.log(`No more cake left! You need ${Math.abs(cake)} pieces more.`);
    }
    if (cake > 0){ 
        console.log(`${Math.abs(cake)} pieces are left.`);
    }
} 
cake(["10",
"10",
"20",
"20",
"20",
"20",
"21"])