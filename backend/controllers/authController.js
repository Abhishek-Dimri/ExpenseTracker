const User = require('../models/User');
const bcrypt = require('bcryptjs');

exports.signUpUser = async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    User.findOne({ email: email })
        .then((existingUser) => {
            if (existingUser) {
                return res.status(400).json({ message: 'User already exists' });
            }

            const newUser = new User({ name, email, password });
            newUser.save()
                .then((user) => {
                    res.status(201).json({ message: 'User created successfully', user });
                })
                .catch((err) => {
                    res.status(500).json({ message: 'Failed to create user', error: err.message });
                });
        })
        .catch((err) => {
            res.status(500).json({ message: 'Something went wrong', error: err.message });
        });
};

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    User.findOne({ email })
        .then((user) => {
            if (user) {
                // Compare the passwords
                bcrypt.compare(password, user.password, (err, isMatch) => {
                    if (err) throw err;

                    if (isMatch) {
                        return res.json("Login successful");
                    } else {
                        return res.json("Invalid credentials");
                    }
                });
            } else {
                res.json("No user found with that email");
            }
        })
        .catch((err) => {
            res.status(500).json({ message: 'Something went wrong', error: err.message });
        });
};