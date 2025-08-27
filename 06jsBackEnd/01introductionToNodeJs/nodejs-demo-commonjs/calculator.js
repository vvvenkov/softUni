// named export
function add(a, b) {
    return a + b;
}

exports.add = add;

// named export
function multiply(a, b) {
    return a * b;
}

exports.multiply = multiply

// named export
const name = 'Pesho';
exports.name = name;

const calculator = {
    add,
    multiply,
    name,
};

// default export, you can have only one default export
module.exports = calculator;
