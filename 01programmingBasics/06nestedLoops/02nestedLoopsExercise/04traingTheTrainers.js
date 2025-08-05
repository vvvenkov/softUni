function trainTheTrainers(input){
    let index = 0;
    let judges = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let sum = 0;
    let grade = 0;
    let gradeCount = 0; 
    let finalAssesment = 0;

    while (command !== "Finish"){
        presentation = command;
        for (let i = 1; i <= judges; i++){
            grade = Number(input[index]);
            sum += grade;
            finalAssesment += grade;
            gradeCount++;
            index++;
        }
        console.log(`${presentation} - ${(sum / judges).toFixed(2)}.`);
        sum = 0;
        command = input[index];
        index++;
    }
    console.log(`Student's final assessment is ${(finalAssesment / gradeCount).toFixed(2)}.`);
}
trainTheTrainers(["3",
"Arrays",
"4.53",
"5.23",
"5.00",
"Lists",
"5.83",
"6.00",
"5.42",
"Finish"])