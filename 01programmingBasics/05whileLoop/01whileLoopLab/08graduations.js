function graduations(input) {
    let index = 0;
    let name = input[index];
    index++;

    let i = 1;
    let gradesSum = 0;
    let negativeGradeCount = 0;
    let boolean = false;

    while (i <= 12) {
        let grade = Number(input[index]);
        index++;

        if (grade < 4.00) {
            negativeGradeCount++;
        } else {
            gradesSum += grade;
            i++;
        }
        if (negativeGradeCount === 2) {
            boolean = true;
            break;
        }
    }

    if (boolean) {
        console.log(`${name} has been excluded at ${i} grade`);
    } else {
        console.log(`${name} graduated. Average grade: ${(gradesSum / 12).toFixed(2)}`);
    }
}
graduations(["Gosho",
    "5",
    "5.5",
    "6",
    "5.43",
    "5.5",
    "6",
    "5.55",
    "5",
    "6",
    "6",
    "5.43",
    "5"])
