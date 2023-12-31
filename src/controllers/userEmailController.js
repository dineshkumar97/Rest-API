const UserEmail = require('../models/userEmail');
const bcrypt = require('bcryptjs');
const generationToken = require('../tokengeneration/generationToken');


exports.createUser = async (req, res) => {
    const { email, password } = req.body;
    const user = await UserEmail.findOne({ email });
    if (!user) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new UserEmail({ email, password: hashedPassword });
        await newUser.save();
        return res.status(201).json({ message: 'User Created' });
    }
    res.status(400).json({ message: 'User Already Exists' });
};

exports.updateUserEmail = async (req, res) => {
    try {
        // din // 123
        const { email, password } = req.body
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await UserEmail.findByIdAndUpdate(req.params.idUser, { email, password: hashedPassword });
        await user.save();
        return res.status(201).json({ message: 'User Up' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



exports.getUserDetails = async (req, res) => {
    try {
        const userDetails = await UserEmail.find();
        let json = {
            message: userDetails,
            statusCode: 200
        }
        res.status(200).json(json);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getParticularUser = async (req, res) => {
    try {
        await UserEmail.findById(req.params.idUser).then(x => {
            res.status(200).json({ message: x });
        })

    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.authenticate = async (req, res) => {
    const { email, password } = req.body;
    const user = await UserEmail.findOne({ email });
    if (!user) {
        return res.status(400).json({ message: 'Invalid email format' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).json({ message: 'InCorrect Password' });
    }
    const token = generationToken(user);
    res.json({ token })
};



