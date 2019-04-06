const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    addDate: {
        type: Date,
        required: true,
        default: Date.now
    },
    salary: {
        type: Number,
        required: true
    },
    position: {
        type: String,
        required: true
    }
});

const Employee = mongoose.model("Employee", Schema);

module.exports = Employee;
