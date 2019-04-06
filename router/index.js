const express = require('express');
const router = express.Router();
const employeeController = require('./employeeController.js')
const userController = require('./userController.js')
const URL = require('../api/baseURL.js');


router.post(URL.employeeURL, employeeController.getAllEmployees);
router.post(URL.employeeURL, employeeController.createEmployee);
//router.delete('/api/user/:id', userController.deleteTask);
router.put(URL.employeeURL+ ':id', employeeController.updateEmployee);

router.post(URL.loginURL, userController.login);
router.post(URL.userURL, userController.createUser);
//router.get(URL.userURL, userController.getAllUsers);

module.exports = router;
