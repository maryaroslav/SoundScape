const express = require('express');
const router = express.Router();
const Playlist = require('../models/playlist');

router.get('/playlists', async (req, res) => {
    try {
        const playlists = await Playlist.find({ userId: req.user._id });
        res.json(playlists);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const user = req.session.user;
        if (!user) {
            return res.status(401).send('Необходимо авторизоваться');
        }
        const playlists = await Playlist.find({ user: user._id });
        res.json(playlists);
    } catch (error) {
        console.error('Ошибка при получении плейлистов:', error);
        res.status(500).send('Ошибка при получении плейлистов');
    }
});

router.get('/:id', async (req, res) => {
    try {
        const user = req.session.user;
        if (!user) {
            return res.status(401).send('Необходимо авторизоваться');
        }
        const playlist = await Playlist.findOne({ _id: req.params.id, user: user._id });
        if (!playlist) {
            return res.status(404).send('Плейлист не найден');
        }
        res.json(playlist);
    } catch (error) {
        console.error('Ошибка при получении плейлиста:', error);
        res.status(500).send('Ошибка при получении плейлиста');
    }
});

router.post('/', async (req, res) => {
    try {
        const user = req.session.user;
        if (!user) {
            return res.status(401).send('Необходимо авторизоваться');
        }
        const playlistData = { ...req.body, user: user._id };
        const newPlaylist = new Playlist(playlistData);
        const savedPlaylist = await newPlaylist.save();
        res.json(savedPlaylist);
    } catch (error) {
        console.error('Ошибка при создании плейлиста:', error);
        res.status(500).send('Ошибка при создании плейлиста');
    }
});

router.post('/:id/add-song', async (req, res) => {
    try {
        const user = req.session.user;
        if (!user) {
            return res.status(401).send('Необходимо авторизоваться');
        }
        // Реализация добавления песни в плейлист
    } catch (error) {
        console.error('Ошибка при добавлении песни в плейлист:', error);
        res.status(500).send('Ошибка при добавлении песни в плейлист');
    }
});

module.exports = router;