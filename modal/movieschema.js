const mongoose = require('mongoose');
const movieList = new mongoose.Schema({
    titles: {
        require: true,
        type: String,
    },
    years: {
        require: true,
        type: String,
    }
})



module.exports = mongoose.model('Movie', movieList);