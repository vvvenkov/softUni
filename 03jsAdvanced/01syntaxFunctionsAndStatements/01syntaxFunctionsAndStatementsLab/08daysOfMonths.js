function daysOfMonths(month, year) {
    let monthSize = new Date(year, month, 0); // we set 0 as a day, like "last day of the month, then we getDate()"
    console.log(monthSize.getDate());
}
daysOfMonths(2, 2013)