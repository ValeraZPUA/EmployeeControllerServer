const express = require('express');
const router = express.Router();
const employeeController = require('./employeeController.js');
const userController = require('./userController.js');
const URL = require('../api/baseURL.js');
const validationMiddleWare = require('../utils/validationMiddleWare');

router.post(URL.employeeURL + 'step', employeeController.getAllEmployees);
router.post(URL.employeeURL, employeeController.createEmployee);
router.put(URL.employeeURL+ ':id', employeeController.updateEmployee);
router.delete(URL.employeeURL+ ':id', employeeController.deleteEmployee);

router.post('/api/search', employeeController.search);

router.post(URL.loginURL, validationMiddleWare.authValidate, userController.login);
router.post(URL.userURL, validationMiddleWare.already, validationMiddleWare.emailValidate, validationMiddleWare.passwordValidate, userController.createUser);
router.get(URL.userURL, userController.getAllUsers);



module.exports = router;
