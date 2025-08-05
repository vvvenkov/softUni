function trekkingMania(input){
    let groupCount = Number(input[0]);

    let musala = 0;
    let monblan = 0;
    let kilimancharo = 0;
    let k2 = 0;
    let everest = 0;

    for (let i = 1; i < input.length; i++){
        let group = Number(input[i]);
        
        if (group <= 5){
            musala += group;
        } else if (group <= 12){
            monblan += group;
        } else if (group <= 25){
            kilimancharo += group;
        } else if (group <= 40){
            k2 += group;
        } else {
            everest += group;
        }
    }

    let allClimbers = musala + monblan + kilimancharo + k2 + everest;

    console.log((musala / allClimbers * 100).toFixed(2)+ "%");
    console.log((monblan / allClimbers * 100).toFixed(2)+ "%");
    console.log((kilimancharo / allClimbers * 100).toFixed(2)+ "%");
    console.log((k2 / allClimbers * 100).toFixed(2)+ "%");
    console.log((everest / allClimbers * 100).toFixed(2)+ "%");

}
trekkingMania((["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"])
)