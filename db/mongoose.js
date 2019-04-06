const mongoose = require('mongoose');

require('../models/employee.model');
require('../models/user.model');

mongoose.connect('mongodb://localhost/_db',  { useNewUrlParser: true }, (err) => {
    if(err){
        process.exit(0);
    } else{
        console.log("DB connection Succes");
    }

});

//enable debug
mongoose.set('debug', true);

//export db

module.exports = mongoose;
