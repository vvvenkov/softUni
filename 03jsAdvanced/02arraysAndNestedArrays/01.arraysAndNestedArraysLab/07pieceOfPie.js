function pieceOfPie(arr, pie1, pie2) {
    let push = false;
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === pie1) {
            newArr.push(arr[i]);
            push = true;
            continue;
        }
        if (push) {
            newArr.push(arr[i])
        }
        if (arr[i] === pie2) {
            break;
        }
    }
    return newArr;
}
pieceOfPie(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie')