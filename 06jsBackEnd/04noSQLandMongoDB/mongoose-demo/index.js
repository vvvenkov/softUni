import mongoose from 'mongoose';

import Student from './models/Student.js';

// mongoose.connect('mongodb://localhost:27017/studentsDb2');

try {
    await mongoose.connect('mongodb://localhost:27017', { dbName: 'studentsDb2' });

    console.log('Connected to DB!');
} catch (err) {
    console.log('Cannot connect to Database!');
    console.log(err.message);
}

// Create new student variant #1
// const student1 = new Student({name: 'Stamat', age: 18});
// await student1.save();

// Create new student variant #2
// await Student.create({name: 'Mariyka', age: 19});

// Get all students
const allStudents = await Student.find();
console.log(allStudents);

// Get students that are 19 years old
const nineteenYearsOlds = await Student.find({ age: 19 });
console.log('Nineteen years old students:');
console.log(nineteenYearsOlds);


// Get students that are 20 years old or older (mongodb way)
const twentyAndAbove = await Student.find({ age: { $gte: 20 } })
console.log('Twenty or more years old');
console.log(twentyAndAbove);

// Get names only (mongodb way)
const studentNames = await Student.find({}, { _id: false, name: true })
console.log('Student names');
console.log(studentNames);

// Get user info
console.log(allStudents.at(0).getInfo());

// Get all users info
allStudents.forEach(student => console.log(student.getInfo()));

// Create student without age (invalid students)
// await Student.create({name: 'To', age: 20});
// await Student.create({name: 'Malinka', lastName: 'Malinova'});

// Get only one student
const firstStudent = await Student.findOne({ name: 'Pesho' }); // .find returns collection of students, but .findOne returns only the first one
console.log(firstStudent);

// Get one student by id
const mariykaStudent = await Student.findById('6835f668b29681634b54d2ff');
console.log(mariykaStudent);

// Update existing record variant #1
const ivayloStudent = await Student.findOne({ name: 'Ivaylo' });
ivayloStudent.age = 27;
await ivayloStudent.save();

// Update existing record variant #2
await Student.updateOne({ name: 'Ivaylo' }, { age: 28 });

// Update multiple records
await Student.updateMany({ name: 'Pesho' }, { name: 'Peter' })

//  Updaet exising record variant #3 
await Student.findByIdAndUpdate('6835e6496d6c9d18d4ff7b7c', { age: 29 }); //Find specific record by id and update

// Delete record variant #1
await Student.deleteOne({ name: 'Test' });

// Delete record variant #2
await Student.deleteMany({ name: 'Test' });

// Delete record variant #3
await Student.findByIdAndDelete('6836062e6d6c9d18d4ff7b84');

// Count all students (without filter)
const studentCount = await Student.countDocuments({});
console.log(studentCount);

// Count all peshos (with filter)
const peshoCount = await Student.countDocuments({ name: 'Peter' })
console.log(peshoCount);

// Using or (mongodb way)
const outliers = await Student.find({
    $or: [
        { age: { $lte: 18 } },
        { age: { $gt: 25 } }
    ]
});
console.log(outliers);

// Using or (mongoose way)
const outliers2 = await Student.find({}).or([
    { age: { $lte: 18 } },
    { age: { $gt: 25 } }
])
console.log(outliers2);

// Get sorted students
const sortedStudents = await Student.find({}).sort({ age: -1, name: 1 });// age descending and name ascending
console.log(sortedStudents);

// Get limited number of students
const first3Students = await Student.find().sort().limit(3)
console.log(first3Students);


