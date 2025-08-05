function vacationBooklist(input) {
    let pages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let daysLeft = Number(input[2])

    let totalTime = pages / pagesPerHour
    let dailyReadTime = totalTime / daysLeft
    console.log(dailyReadTime)
}