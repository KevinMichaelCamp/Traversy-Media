const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = {
    authenticate: function (req, res) {
        User.findOne({
            userName: req.body.userName
        }).then(user => {
            if (user == null) {
                res.json({
                    success: false,
                    msg: "User not found"
                });
            } else {
                bcrypt.compare(req.body.password, user.password).then(result => {
                    if (result) {
                        const token = jwt.sign({
                            data: user
                        }, "MySecret", {
                            expiresIn: 604800
                        });
                        res.json({
                            success: true,
                            msg: "Login successful",
                            token: 'JWT ' + token,
                            user: {
                                id: user._id,
                                name: user.name,
                                userName: user.userName,
                                email: user.email
                            }
                        });
                    } else {
                        res.json({
                            success: false,
                            msg: "Password invalid"
                        });
                    }
                })
            }
        }).catch(err => res.json({
            success: false,
            msg: err
        }));
    },

    delete: function (req, res) {
        User.findByIdAndDelete({
            _id: req.user.id
        }).then(user => {
            res.json({
                success: true,
                msg: "User deleted",
                user: user
            })
        }).catch(err => res.json({
            success: false,
            msg: err
        }));
    },

    index: function (req, res) {
        User.find().then(users => {
            res.json(users)
        }).catch(err => res.json({
            success: false,
            msg: err
        }));
    },

    profile: function (req, res) {
        res.json({
            user: req.user
        });
    },

    register: function (req, res) {
        User.findOne({
                email: req.body.email
            })
            .then(user => {
                if (user != null) {
                    res.json({
                        success: false,
                        msg: "Email already in use"
                    });
                } else if (req.body.password != req.body.pw_confirm) {
                    res.json({
                        success: false,
                        msg: "Password does not match confirmation"
                    });
                } else {
                    let user = new User();
                    user.name = req.body.name;
                    user.userName = req.body.userName;
                    user.email = req.body.email;
                    user.password = req.body.password;
                    user.validate(err => {
                        if (err) {
                            res.json({
                                success: false,
                                msg: 'User info invalid'
                            });
                        } else {
                            bcrypt.hash(user.password, 10).then(hashpw => {
                                user.password = hashpw;
                                user.save().then(newUser => {
                                    res.json({
                                        success: true,
                                        msg: "New user registered, you may now login",
                                        user: newUser
                                    });
                                }).catch(err => res.json({
                                    success: false,
                                    msg: 'Error registering'
                                }));
                            })
                        }
                    })
                }
            })
    },

    update: function (req, res) {
        let user = req.user;
        user.name = req.body.name;
        user.userName = req.body.userName;
        user.email = req.body.email;
        user.validate(err => {
            if (err) {
                res.json({
                    success: false,
                    msg: "Error updating user"
                })
            } else {
                User.findOneAndUpdate({
                    _id: req.user._id
                }, req.body).then(user => {
                    res.json({
                        success: true,
                        msg: "User info updated",
                        user: user
                    })
                }).catch(err => {
                    res.json({
                        success: false,
                        msg: err
                    })
                })
            }
        })
    }

}