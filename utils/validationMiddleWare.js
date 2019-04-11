const users = require('../models/user.model');
const yup = require('yup');
const bcrypt = require('bcrypt');

const schemaEmail = yup.object().shape({
    email: yup.string().email(),
});

const schemaPassword = yup.object().shape({
    password: yup.string().min(8)
});

module.exports = {

    authValidate: async (req, res, next) => {
      const enterData = req.body;
      const user = await users.findOne({email: enterData.email});
      if(user) {
          const isPasswordValid = await bcrypt.compare(enterData.password, user.password);
          if (!isPasswordValid) {
              next({code:400, message: "Invalid password or E-mail"});
          } else {
              next();
          }
      } else {
          next({code:400, message: "Invalid password or E-mail"});
      }
    },
    already: async (req, res, next) => {
        const newUser = req.body;
        console.log('NEW USER', newUser);
        const oldUser = await users.findOne({email: newUser.email});
        console.log('OLD USER', oldUser);
        if(oldUser) {
            next({code:400, message: "Users already exists"});
        } else {
            next();
        }
    },
    emailValidate: (req, res, next) => {
        schemaEmail.isValid(req.body)
            .then(isValid => {
                if(isValid) {
                    next();
                } else {
                    next({code:400, message: "This email not correct"});
                }
            });
    },
    passwordValidate: (req, res, next) => {
        schemaPassword.isValid(req.body)
            .then(isValid => {
                if(isValid) {
                    next();
                } else {
                    next({code:400, message: "Password is too short"});
                }
            })
    }
};
