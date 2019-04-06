const Employee = require('../models/employee.model');

let skip = 0;

module.exports.createEmployee = async (req, res, next) => {
    try {
        const employee = new Employee(req.body);
        const newEmployee = await employee.save();
        res.send(await Employee.find());
    } catch (e) {
        next(e);
    }
};

module.exports.getAllEmployees = async (req, res, next) => {
    try {
        const data = req.body.step;

        if (data && data=='minus' && skip!=0) {
            skip = skip - 2;
        }
        if (data && data=='plus') {
            skip = skip + 2;
        }

        const employees = await Employee.find().limit(2).skip(skip);

        if (employees.length != 0) {
            res.send(employees);
        } else {
            res.send("No more employees");
            skip = skip - 2;
        }


    } catch (e) {
        next (e);
    }
};

module.exports.updateEmployee = async (req, res, next) => {
    try {
        const updatedEmployee = req.body;
        await Employee.findOneAndUpdate({_id: req.params.id}, updatedEmployee)
        res.send("updated")
    } catch (e) {
        next (e)
    }

}
