var userController = require('../controllers/UserController');
var passport = require('passport');
var path = require('path');

module.exports = function (app) {
    app.post('/authenticate', userController.authenticate);
    app.post('/register', userController.register);
    app.get('/profile', passport.authenticate('jwt', {
        session: false
    }), userController.profile);
    app.get('/users', userController.index);
    app.patch('/users', passport.authenticate('jwt', {
        session: false
    }), userController.update);
    app.delete('/users', passport.authenticate('jwt', {
        session: false
    }), userController.delete);
    app.all('*', (req, res, next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}