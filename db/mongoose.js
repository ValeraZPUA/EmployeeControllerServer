const mongoose = require('mongoose');

require('../models/employee.model');
require('../models/user.model');

mongoose.connect('mongodb://localhost/db_employeeController',  { useNewUrlParser: true }, (err) => {
    if(err){
        process.exit(0);
    } else{
        console.log("DB connection Success");
    }

});

mongoose.set('debug', true);

module.exports = mongoose;
