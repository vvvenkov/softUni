function repeatString(string, num){
    let res = "";
    for (let i = 0; i < num; i++){
        res += string;
    }
    console.log(res);
}
repeatString("abc", 3)