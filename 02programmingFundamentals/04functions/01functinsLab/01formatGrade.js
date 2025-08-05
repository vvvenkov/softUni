function formatGrade(grade) {
    let gradeText = "";
    if (grade < 3.00) {
        gradeText = "Fail";
    } else if (grade < 3.5) {
        gradeText = "Poor";
    } else if (grade < 4.5) {
        gradeText = "Good";
    } else if (grade < 5.5) {
        gradeText = "Very good";
    } else if (grade >= 5.5) {
        gradeText = "Excellent";
    }

    function print(){
        console.log(`${gradeText} (${grade})`);
    }
    print()
}
formatGrade(5)