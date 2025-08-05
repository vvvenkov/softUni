function tickets(input) {
    let counterKids = 0;
    let counterStudents = 0;
    let counterStandards = 0;
    let command;

    while ((command = input.shift()) !== 'Finish') {
        let movie = command;
        let totalSeats = Number(input.shift());
        let usedSeats = 0;
        let ticketType;

        while (usedSeats < totalSeats && (ticketType = input.shift()) !== 'End') {
            usedSeats++;
            if (ticketType === 'kid') {
                counterKids++;
            } else if (ticketType === 'student') {
                counterStudents++;
            } else if (ticketType === 'standard') {
                counterStandards++;
            }
        }
        console.log(`${movie} - ${(usedSeats * 100.0 / totalSeats).toFixed(2)}% full.`);
    }
    let totalTickets = counterKids + counterStudents + counterStandards;

    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${((counterStudents / totalTickets) * 100).toFixed(2)}% student tickets.`);
    console.log(`${((counterStandards / totalTickets) * 100).toFixed(2)}% standard tickets.`);
    console.log(`${((counterKids / totalTickets) * 100).toFixed(2)}% kids tickets.`);

}