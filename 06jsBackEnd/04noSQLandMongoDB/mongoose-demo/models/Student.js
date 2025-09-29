import mongoose from 'mongoose';

// Create schema
// const studentSchema = new mongoose.Schema({ // Function constructor
//     name: String, // Optional by default
//     age: Number,// Optional by default
// });

// Create schema with required fileds
const studentSchema = new mongoose.Schema({ // Function constructor
    name: {
        type: String,
        required: true,
        minLength: [3, 'Student name "{VALUE}" is too short!'],
        maxLength: [20, 'Student name "{VALUE}" is too long']
    },
    age: {
        type: Number,
        required: [true, 'Student age is required!'],
        min: 6,
        max: 100,
    },
});

// Add custom method to model
// studentSchema.methods.getInfo = function () { // Function expression is important, not arrow function
//     return `Hi, my name is ${this.name} and I'm ${this.age} years old!`;
// };
studentSchema.method('getInfo', function () {
    return `Hi, my name is ${this.name} and I'm ${this.age} years old!`;
})

// Create model
const Student = mongoose.model('Student', studentSchema) // factory function

export default Student;
