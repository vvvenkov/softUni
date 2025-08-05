function solution(initialValue) {
    // Store the initial value in the closure
    let currentValue = initialValue;

    // Return a new function that adds the given number to currentValue
    return function(addValue) {
        let newValue = currentValue;   //create a new variable to not change the global function's closure
        newValue += addValue;  // Add the input number to the stored value
        return newValue;       // Return the updated value
    };
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));