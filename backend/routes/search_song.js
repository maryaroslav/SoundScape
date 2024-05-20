const express = require('express');
const router = express.Router()
const Song = require('../models/song');
const { json } = require('body-parser');

router.get('/', async (req, res) => {
    const { term } = req.query;

    try {
        const searchQuery = {
            $or: [
                { name: { $regex: new RegExp(term, 'i') } },
                { artist: { $regex: new RegExp(term, 'i') } },
                { album: { $regex: new RegExp(term, 'i') } },
            ]
        };
    
        const songs = await Song.find(searchQuery);
        res.json(songs)
    } catch (error) {
        console.error('Error searching songs:', error);
        res.status(500),json({ message: 'Error searching songs' })
    }
    
}); 

module.exports = router; 
