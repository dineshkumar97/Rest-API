require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors= require('cors');
const userEmailRoutes = require('./src/router/userEmailRouter');
const enquiryRouter = require('./src/router/enquiryRouter');
const memberRouter = require('./src/router/memberRouter');
const mongooseString = process.env.DATABASE_URL;
const app = express();
app.use(cors());

app.use(express.json());
app.use('/api', userEmailRoutes);
app.use('/api', enquiryRouter);
app.use('/api', memberRouter);
// const userName = 'dineshkumar97';
// const password = 'Dinesh%406165';
// const cluster = '@cluster0.qi4ot';
// const mongodb = '.mongodb.net/';
// const database = 'userdetails';
// const db = `mongodb+srv://${userName}:${password}${cluster}${mongodb}${database}`

mongoose.connect(mongooseString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Data Base conencted successfuly');
}).catch((err) => {
    console.log("Error received= " + err)
})




app.listen(3000, () => {
    console.log('Server started 3001')
})