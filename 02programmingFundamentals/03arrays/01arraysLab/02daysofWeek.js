function daysofWeek(input) {
    if (input < 0 || input > 7) {
        console.log("Invalid Day!");
    } else {
        let days = [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Firday",
            "Saturday",
            "Sunday"
        ]
        console.log(days[input - 1]);
    }
}
daysofWeek(7)
daysofWeek(6)
daysofWeek(11)
