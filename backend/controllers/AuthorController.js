// server/controllers/AuthorController.js
const User = require('../models/User');
const { createSecretToken } = require('../util/SecretToken');
const bcrypt = require('bcryptjs');

module.exports.Signup = async (req, res, next) => {
    try {
        const { email, password, username, createdAt } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.json({ message: 'User already exists' });
        }
        const user = await User.create({ email, password, username, createdAt });
        const token = createSecretToken(user._id);
        res.cookie('token', token, {
            withCredentials: true,
            httpOnly: false,
        });
        res.status(201).json({ message: 'User signed in successfully', success: true, user });
        next();
    } catch (error) {
        console.error(error);
    }
}

module.exports.Login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.json({ message: 'Please enter all fields' });
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.json({ message: 'Invalid credentials' });
        }
        const auth = await bcrypt.compare(password, user.password);
        if (!auth) {
            return res.json({ message: 'Incorrect password or email' });
        }
        const token = createSecretToken(user._id);
        res.cookie('token', token, {
            withCredentials: true,
            httpOnly: false,
        });
        res.status(201).json({ message: 'User logged in successfully', success: true, user });
        next();
    } catch (error) {
        console.log(error);
    }
}

module.exports.getPersonInfo = async (req, res, next) => {
    try {
        const userId = req.body.userId;
        const user = await User.findOne({ _id: userId });
        if(!user) {
            return res.status(400).json({ message: 'User not found' });
        }
        console.log(user);
        res.status(200).json({ message: 'User fetched successfully', success: true, user });
        next();
    } catch (error) {
        console.log(error);
    }
}

module.exports.addWishlist = async (req, res, next) => {
    try {
        const { snack } = req.body;
        const user = await User.findById(req.user._id);
        if (!user) {
            return res.json({ message: 'User not found' });
        }
        user.wishlist.push(snack);
        user.save();
        res.status(200).json({ message: 'Wishlist updated successfully', success: true, user });
        next();
    } catch (error) {
        console.log(error);
    }
}
