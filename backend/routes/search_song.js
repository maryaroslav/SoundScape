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

// const app = express();

// app.get('/search', async (req, res) => {
//     const searchTerm = req.query.term;

//     try {
//         // Поиск песен по имени, исполнителю или альбому (можно расширить)
//         const songs = await Song.find({
//             $text: { $search: searchTerm }
//         });

//         res.json(songs);
//     } catch (err) {
//         console.log(err);
//         res.status(500).send('Oshibka pri poiske pesen')
//     }
// });