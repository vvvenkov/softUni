function depositCalculator(input) {
    let depositAmount = Number(input[0]);
    let termDeposit = Number(input[1]);
    let amountIntrestRate = Number(input[2]);

    let yearDepositAmount = depositAmount * (amountIntrestRate / 100);
    let monthDeposit = yearDepositAmount / 12;

    let total = monthDeposit * termDeposit;
    let totalMoney = total + depositAmount;
    console.log(totalMoney)
}