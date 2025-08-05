function accountBalance(input) {
    let index = 0;

    let command = input[index];
    index++;

    let account = 0;

    while (command !== "NoMoreMoney") {
        let cash = Number(command)

        if (cash < 0) {
            console.log("Invalid operation!");
            break;
        }
        account += cash;
        
        console.log(`Increase: ${cash.toFixed(2)}`);

        command = input[index];
        index++;
    }
    console.log(`Total: ${account.toFixed(2)}`);
}
accountBalance(["120",
"45.55",
"-150"])
