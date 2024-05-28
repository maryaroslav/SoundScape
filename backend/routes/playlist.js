const express = require('express');
const router = express.Router();
const Playlist = require('../models/playlist');
const User = require('../models/user');

router.get('/playlists', async (req, res) => {
    try {
        const playlists = await Playlist.find({ userId: req.user._id }).select('name author');
        res.json(playlists);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const user = req.session.user;
        if (!user) {
            return res.status(401).send('You need to log in');
        }
        const playlists = await Playlist.find({ user: user._id });
        res.json(playlists);
    } catch (error) {
        console.error('Error when retrieving playlists:', error);
        res.status(500).send('Error receiving playlists');
    }
});

router.get('/:id', async (req, res) => {
    try {
        const user = req.session.user;
        if (!user) {
            return res.status(401).send('You need to log in');
        }
        const playlist = await Playlist.findOne({ _id: req.params.id, user: user._id });
        if (!playlist) {
            return res.status(404).send('Playlist not found');
        }
        res.json(playlist);
    } catch (error) {
        console.error('Error while retrieving a playlist:', error);
        res.status(500).send('Error while retrieving a playlist');
    }
});

router.post('/', async (req, res) => {
    try {
        const user = req.session.user;
        if (!user) {
            return res.status(401).send('You need to log in');
        }
        const playlistData = {
             ...req.body, 
             user: user._id,
             author: user.username
             };
        const newPlaylist = new Playlist(playlistData);
        const savedPlaylist = await newPlaylist.save();
        res.json(savedPlaylist);
    } catch (error) {
        console.error('Error when creating a playlist:', error);
        res.status(500).send('Error when creating a playlist');
    }
});

router.post('/:id/add-song', async (req, res) => {
    try {
        const user = req.session.user;
        if (!user) {
            return res.status(401).send('You need to log in');
        }
    } catch (error) {
        console.error('Error when adding a song to a playlist:', error);
        res.status(500).send('Error when adding a song to a playlist.');
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const user = req.session.user;
        if (!user) {
            return res.status(401).send('You must be logged in');
        }
        console.log(`Attempting to delete playlist with ID: ${req.params.id} for user: ${user._id}`);
        const playlist = await Playlist.findOneAndDelete({ _id: req.params.id, user: user._id });
        if (!playlist) {
            console.log('Playlist not found or user not authorized to delete');
            return res.status(404).send('Playlist ne najden');
        }
        console.log('Playlist deleted successfully');
        res.status(204).send();
    } catch (error) {
        console.error('Error when deleting a playlist:', error)
        res.status(500).send('Error when deleting a playlist')
    }
})

module.exports = router;