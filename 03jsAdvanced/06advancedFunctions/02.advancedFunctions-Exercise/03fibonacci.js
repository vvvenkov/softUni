function getFibonator() {
    let a = 0, b = 1;   // Initialize the first two Fibonacci numbers

    return function () {
        const nextFib = a + b;   // Calculate the next Fibonacci number
        a = b;                   // Update `a` to the previous `b`
        b = nextFib;             // Update `b` to the calculated next Fibonacci number
        return a;                //Return the next Fibonacci number in sequence
    };
}
let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13