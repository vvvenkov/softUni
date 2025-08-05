function previousDay(year, month, day) {

    let initialDate = new Date(year, month, day);

    if (day === 1 && month === 1) {
        let previousYear = new Date(year, month, 0)                         //get previous year
        console.log(`${initialDate.getFullYear() - 1}-${initialDate.getMonth() - 1}-${previousYear.getDate(year, month)}`);
    } else if (day === 1) {
        let previousMonth = new Date(year, month - 1, 0)    // get previous month
        console.log(`${initialDate.getFullYear()}-${initialDate.getMonth() - 1}-${previousMonth.getDate(year, month)}`);
    } else {
        console.log(`${initialDate.getFullYear()}-${initialDate.getMonth()}-${initialDate.getDate() - 1}`);
    }
}
previousDay(2016, 3, 1)