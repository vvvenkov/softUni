function sumPrimeNonPrime(input) {
    let index = 0;
    let command = input[index];
    index++;

    let primeSum = 0;
    let nonPrimeSum = 0;

    while (command !== "stop") {
        let num = Number(command)
        if (num < 0) {
            console.log("Number is negative.");
            command = input[index];
            index++;
            continue;
        }
        if (num === 1) {
            primeSum += 1;
            command = input[index];
            index++;
            continue;
        }
        let isPrime = true;
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                nonPrimeSum += num;
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primeSum += num;
        }
        command = input[index];
        index++;
    }
    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);

}
sumPrimeNonPrime(["0",
"-9",
"0",
"stop"])