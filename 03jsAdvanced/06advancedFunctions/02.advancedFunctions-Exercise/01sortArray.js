function solve(arr, command) {

    if (command === 'asc') {
        arr.sort((a, b) => a - b);
    } else if (command === 'desc') {
        arr.sort((a, b) => b - a);
    }
    return arr;

}
solve([10, 8, 5, 7, 9, 6], 'asc')