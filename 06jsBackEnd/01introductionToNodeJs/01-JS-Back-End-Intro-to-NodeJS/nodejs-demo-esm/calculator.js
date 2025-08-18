// named export
export function add(a, b) {
    return a + b;
}

// named export
export function multiply(a, b) {
    return a * b;
}

// named export
export const name = 'Pesho';

const calculator = {
    add,
    multiply,
    name,
};

// default export, you can have only one default export
export default calculator;
