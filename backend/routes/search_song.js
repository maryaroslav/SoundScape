const express = require('express');
const router = express.Router()
const Song = require('../models/song');

router.get('/', async (req, res) => {
    const { term } = req.query;

    const searchQuery = {
        $or: [
            { name: { $regex: new RegExp(term, 'i') } },
            { artist: { $regex: new RegExp(term, 'i') } },
            { album: { $regex: new RegExp(term, 'i') } },
        ]
    };

    const songs = await Song.find(searchQuery);
    res.json(songs)
    
}); 

module.exports = router; 
