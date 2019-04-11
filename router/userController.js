const User = require('../models/user.model');
const bcrypt = require('bcrypt');

module.exports.login = async (req, res, next) => {
    const data = req.body;
    console.log('LOGIN', data);
    try {
        const user = await User.findOne({email: data.email});
        // console.log(user);
        // if (!user) {
        //     throw new Error("Email or password is not valid");
        // }
        // const isPasswordValid = await bcrypt.compare(data.password, user.password);
        // if (!isPasswordValid) {
        //     throw new Error("Email or password is not valid");
        // }
        res.send({ user });
    } catch (e) {
        next(e);
    }
};

module.exports.createUser = async (req, res, next) => {
    const user = new User(req.body);
    console.log('createUser', req.body);
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(8));
    try {
        const newUser = await user.save();
        res.send(newUser);
    } catch (e) {
        next('This email have been already registered');
    }
};

module.exports.getAllUsers = async (req, res, next) => {
    try {
        const user = await User.find();
        res.send(user);
    } catch (e) {
        next (e);
    }
};
