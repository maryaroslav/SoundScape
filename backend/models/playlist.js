const mongoose = require('mongoose');
const connect = mongoose.connect("mongodb://127.0.0.1:27017/SoundScape")

connect.then(() => {
    console.log("Database connected");
})
.catch(() => {
    console.log("Database cennot be connected");
})
const playlistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: false
    },
    description: {
        type: String,
        required: false
    },
    songs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Song'
    }],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    author: {
        type: String,
        required: true
    }
});

const Playlist = mongoose.model('Playlist', playlistSchema);

module.exports = Playlist;