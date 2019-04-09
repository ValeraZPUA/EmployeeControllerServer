const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema.Types;

const employeeSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        trim: true
    },
    gender: {
        type: String,
        required: true,
        trim: true
    },
    phoneNumber: {
        type: Number,
        required: true,
        trim: true
    },
    addDate: {
        type: Date,
        required: true,
        default: Date.now,
        trim: true
    },
    salary: {
        type: Number,
        required: true,
        trim: true
    },
    position: {
        type: String,
        required: true,
        trim: true
    }
});


// employeeSchema.index({
//     name: "text",
//     description: "text"
// });

employeeSchema.index({
    "name": "text"
});


const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
