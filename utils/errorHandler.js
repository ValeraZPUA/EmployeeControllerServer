module.exports = (err, req, res, next) => {
    console.log(err.message);
    res.status(err.code).send(err.message);
};
