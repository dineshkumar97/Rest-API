const express = require('express');
const router = express.Router();
const Movie = require('../modal/movieschema');
const User = require('../modal/user');
const generationToken = require('../modal/utils/index');
const bcrypt = require('bcryptjs');
const verifyToken = require('../middleware');
router.post('/movie', async (req, res) => {
    const movies = new Movie({
        titles: req.body.titles,
        years: req.body.years
    })
    try {
        const dataSave = await movies.save();
        res.status(201).json(dataSave)
    }
    catch (error) {
        res.status(500).json({ message: error.message })

    }
})

router.get('/movielist', async (req, res) => {
    try {
        const movieList = await Movie.find();
        res.json(movieList)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.post('/user', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ email, password: hashedPassword });
        await newUser.save();
        return res.status(201).json({ message: 'User Created' });
    }
    res.status(404).json({ message: 'User Already Exists' });
});

router.get('/userlist', async (req, res) => {
    try {
        const movieList = await User.find();
        res.json(movieList)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.post('/authenticate', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        return res.status(404).json({ message: 'User Not Found' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(401).json({ message: 'InCorrect Password' });
    }

    const token = generationToken(user);
    res.json({ token })
})


// router.post('/resetpassword', async (req, res) => {
//     const { email } = req.body;
//     const user = await User.findOne({ email });
//     if(!user){
//         return res.status(404).json({ message: 'User Not Found' });
//     }

//     const token=Math.random().toString(36).slice(-8);
//     user.restPasswordToken=token;
//     user.restPasswordExpire=Date.now()+360000;
//     await user.save();
// })


router.get('/auth',verifyToken , (req, res) => {
   res.json({message:`Welcome,${req.user.email}! This is protected data`});
})


module.exports = router;