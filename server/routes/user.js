require('dotenv').config();
const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require('../models/User');
const jwt_secret = process.env.JWT_SECRET;

router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        let user = await User.findOne({email});
        if(user){
            return res.status(400).json({errors: [{msg: 'User already exists'}]});
        }

        user = new User({
            name, email, password 
        });

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        await user.save();

        const payload = {
            user: {
                id: user.id
            }
        }

        jwt.sign(
            payload,
            jwt_secret,
            { expiresIn: 360000}, 
            (err, token) => {
                if(err) throw err;
                res.json({ token });
            });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');        
    }
})

module.exports = router;