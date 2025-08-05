function schoolRegister(arr) {
    let register = [];

    let grade1 = [];
    let grade2 = [];
    let grade3 = [];
    let grade4 = [];
    let grade5 = [];
    let grade6 = [];
    let grade7 = [];
    let grade8 = [];
    let grade9 = [];
    let grade10 = [];
    let grade11 = [];
    let grade12 = [];

    arr.forEach(line => {
        let name = line.split(",")[0].split(": ")[1];
        let grade = line.split(",")[1].split(": ")[1];
        let score = line.split(": ")[3];

        let curGrade = grade;

        switch(grade) {
            case "1": grade1.push({ name, grade, score }); break;
            case "2": grade2.push({ name, grade, score }); break;
            case "3": grade3.push({ name, grade, score }); break;
            case "4": grade4.push({ name, grade, score }); break;
            case "5": grade5.push({ name, grade, score }); break;
            case "6": grade6.push({ name, grade, score }); break;
            case "7": grade7.push({ name, grade, score }); break;
            case "8": grade8.push({ name, grade, score }); break;
            case "9": grade9.push({ name, grade, score }); break;
            case "10": grade10.push({ name, grade, score }); break;
            case "11": grade11.push({ name, grade, score }); break;
            case "12": grade12.push({ name, grade, score }); break;

        }
    });

    for (let el of grade9) {
        console.log(el);
    }

}
schoolRegister(["Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"])