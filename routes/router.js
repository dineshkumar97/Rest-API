const express = require('express');
const router = express.Router();
const Movie = require('../modal/movieschema');


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


module.exports = router;