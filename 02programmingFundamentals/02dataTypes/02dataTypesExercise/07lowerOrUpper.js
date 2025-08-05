function lowerOrUpper(char){
    if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90){
        console.log("upper-case");
    } else {
        console.log("lower-case");
    }
}
lowerOrUpper("f")
//-----------------------------------------------// USE ASCI TABLE
function lowerOrUpper2(char){
    if (char.toUpperCase() === char){
        console.log("upper-case");
    } else {
        console.log("lower-case");
    }   
}
lowerOrUpper2("")