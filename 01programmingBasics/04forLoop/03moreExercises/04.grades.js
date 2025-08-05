function grades(input) {
    let studentsCount = Number(input[0]);
    
    let fail = 0;
    let good = 0;
    let veryGood = 0;
    let excellent = 0;
    let average = 0;

    for (let i = 1; i <= studentsCount; i++){
        let currentGrade = Number(input[i]);
        
        if (currentGrade < 3){
            fail++;
            average += currentGrade;
        } else if (currentGrade < 4){
            good++;
            average += currentGrade;
        } else if (currentGrade < 5){
            veryGood++;
            average += currentGrade;
        } else if (currentGrade >= 5){
            excellent++;
            average += currentGrade;
        }
    }
    console.log(`Top students: ${(((excellent / studentsCount) * 100).toFixed(2))}%`);
    console.log(`Between 4.00 and 4.99: ${(((veryGood / studentsCount) * 100).toFixed(2))}%`);
    console.log(`Between 3.00 and 3.99: ${(((good / studentsCount) * 100).toFixed(2))}%`);
    console.log(`Fail: ${((fail / studentsCount) * 100).toFixed(2)}%`);
    console.log(`Average: ${((average / studentsCount).toFixed(2))}`);
}
grades(["10",
    "3.00",
    "2.99",
    "5.68",
    "3.01",
    "4",
    "4",
    "6.00",
    "4.50",
    "2.44",
    "5"])