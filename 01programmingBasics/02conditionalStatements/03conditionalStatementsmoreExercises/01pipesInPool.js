function pipesInPool(input) {
    let poolVolume = Number(input[0]);
    let debitPipe1 = Number(input[1]);
    let debitPipe2 = Number(input[2]);
    let workerHours = Number(input[3]).toFixed(2);

    let totalPipe1 = debitPipe1 * workerHours;
    let totalPipe2 = debitPipe2 * workerHours;

    let totalFilled = totalPipe1 + totalPipe2;
    let filledPercent = ((totalFilled / poolVolume) * 100).toFixed(2); 
    let pipe1percent = totalPipe1 / totalFilled * 100;
    let pipe2percent = totalPipe2 / totalFilled * 100;

    if (totalFilled <= poolVolume) {
        console.log(`The pool is ${filledPercent}% full. Pipe 1: ${pipe1percent.toFixed(2)}%. Pipe 2: ${pipe2percent.toFixed(2)}%.`);
    } else {
        console.log(`For ${workerHours} hours the pool overflows with ${(totalFilled - poolVolume).toFixed(2)} liters.`);
    }
}
pipesInPool([100,
    100,
    100,
    2.5])