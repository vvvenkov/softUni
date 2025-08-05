function clock(input){
    for (let i = 0; i < 24; i++){
        for (let j = 0; j < 60; j++){
            for (let y = 0; y < 60; y++){
                console.log(`${i} : ${j} : ${y}`);
            }
        }
    }
}
clock()