function workingHours(input) {
    let hours = Number(input[0]);
    let day = input[1];
    work = 0;

    if (day === "Monday" || "Tuesday" || "Wednesday" || "Thursday" || "Friday" || "Saturday") {
        if (hours >= 10 && hours < 18) {
            console.log("open")
        } else {
            console.log("closed")
        }
    } else {
        (day === "Sunday")
        console.log("closed");
    }
}