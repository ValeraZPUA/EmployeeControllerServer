const mongoose = require('mongoose');
const moment = require('moment');

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
        type: String,
        required: true,
        default: moment().format("MMM Do YY"),
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
