require('dotenv').config();
const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require('../models/User');
const auth = require('../middleware/auth');
const { default: mongoose } = require('mongoose');
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

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        let user = await User.findOne({email});
        if(!user){
            return res.status(400).json({errors: [{msg: 'Please check your credentials and try again!'}]});
        }

        const isCorrect = await bcrypt.compare(password, user.password);

        if(isCorrect){
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
        }else{
            return res.status(400).json({errors: [{msg: 'Please check your credentials and try again!'}]});
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');        
    }
})

router.get('/profile/:id', auth, async (req, res) => {
    try {
        const user = await User.findOne({_id: new mongoose.Types.ObjectId(req.params.id)}).select(['name', 'email', '_id']);
        if(!user){
            return res.status(400).json({msg: "Profile not found!"});
        }
        res.json({user});
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
})

router.post('/update_user', auth, async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const password = await bcrypt.hash(req.body.password, salt);
        const name = req.body.name;

        const updatedUser = await User.findOneAndUpdate({_id: new mongoose.Types.ObjectId(req.user.id)}, {password: password, name: name});
        
        if(!updatedUser) return res.status(500).json({msg: "Could not update user, please try again."});

        res.status(200).json({msg: "Successfully updated user!"});
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error')
    }
})

router.get('/', auth, async (req, res) => {
    try {
        const users = await User.find().select(['name', 'email', '_id']);

        res.status(200).json({users});
    } catch (error) {
        res.status(500).send("Server Error")
    }
})

module.exports = router;