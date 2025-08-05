function sequence2k1(input){
    let num = Number(input[0]);

    let start = 1;

    while(start <= num){
        console.log(start);
        start = start * 2 + 1;
    }
}
sequence2k1(["17"])