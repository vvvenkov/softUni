function examPreparation(input) {
    let index = 0;
    let negativeGrades = Number(input[index]);
    index++;
    let problem = input[index];
    index++;
    let grade = Number(input[index]);
    index++;

    let boolean = false;
    let sum = 0;
    let problemsCount = 0;
    let negativeGradeCounter = 0;
    let lastProblem = "";

    while (problem !== "Enough") {
        lastProblem = problem;

        if (grade <= 4) {
            negativeGradeCounter++;
            problemsCount++;
            sum += grade;
        } else {
            sum += grade;
            problemsCount++;
        }
        if (negativeGradeCounter === negativeGrades) {
            boolean = true;
            break;
        }
        problem = input[index];
        index++;

        grade = Number(input[index]);
        index++
    }

    if (problem === "Enough") {
        console.log(`Average score: ${(sum / problemsCount).toFixed(2)}`);
        console.log(`Number of problems: ${problemsCount}`);
        console.log(`Last problem: ${lastProblem}`);
    }
    if (boolean) {
        console.log(`You need a break, ${negativeGradeCounter} poor grades.`);
    }
}
examPreparation((["3",
    "Money",
    "6",
    "Story",
    "4",
    "Spring Time",
    "5",
    "Bus",
    "6",
    "Enough"])
)
