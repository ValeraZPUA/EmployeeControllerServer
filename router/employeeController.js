const Employee = require('../models/employee.model');

let skip = 0;

module.exports.createEmployee = async (req, res, next) => {
    try {
        const employee = new Employee(req.body);
        const newEmployee = await employee.save();
        res.send(newEmployee);
    } catch (e) {
        next(e);
    }
};

module.exports.getAllEmployees = async (req, res, next) => {
    try {
        const data = req.body.step;
        if (data && data=='previous' && skip!=0) {
            skip = skip - 2;
        }

        if (data && data=='next') {
            skip = skip + 2;
        }

        const employees = await Employee.find().limit(2).skip(skip);

        if (employees.length === 0 && skip!==0) {
            skip = skip - 2;
            const employees = await Employee.find().limit(2).skip(skip);
            res.send(employees);
        } else {
            res.send(employees);
        }

    } catch (e) {
        next (e);
    }
};

module.exports.updateEmployee = async (req, res, next) => {
    try {
        const updatedEmployee = req.body;
        console.log(updatedEmployee);
        await Employee.findOneAndUpdate({_id: req.params.id}, updatedEmployee);
        res.send("updated")
    } catch (e) {
        next (e)
    }
};

module.exports.search = async (req, res, next) => {
    try {
        const searchPhrase = req.body.phrase;
        console.log(searchPhrase);
        const employees = await Employee.find({ $text: { $search: searchPhrase }});
        res.send(employees);
    } catch (e) {
        next (e);
    }
};

module.exports.deleteEmployee = async (req, res, next) => {
    try {
        await Employee.deleteOne({_id: req.params.id});
        res.send("deleted");
    } catch (e) {
        next(e);
    }
};
