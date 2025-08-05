function evenPowersOf2(input){
    let num = Number(input[0]);

    for (let i = 0; i <= num; i += 2){
        let res = Math.pow(2, i);
        console.log(res);
    }
}
evenPowersOf2(["3"])