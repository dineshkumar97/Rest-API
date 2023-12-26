const express = require('express');
const router = express.Router();
const User = require('../src/models/userEmail');
const generationToken = require('../src/tokengeneration/generationToken');
const bcrypt = require('bcryptjs');

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