function schoolGrades(input) {
    let obj = {};

    for (let line of input) {
        let tokens = line.split(" ");
        let name = tokens.shift()
        let grades = tokens.map(Number);

        if (!obj.hasOwnProperty(name)) {
            obj[name] = [];
        }

        let existing = obj[name];

        for (let grade of grades) {
            existing.push(grade)
        }
    }
    let sorted = Object.entries(obj).sort((a, b) => a[0].localeCompare(b[0]));

    for (let [name, grades] of sorted){
        let average = 0;
        for (let grade of grades){
            average += grade;
        }
        average = average / grades.length;
        console.log(`${name} ${average.toFixed(2)}`);
    }
}

schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'])