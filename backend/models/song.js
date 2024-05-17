const mongoose = require('mongoose');
const connect = mongoose.connect("mongodb://127.0.0.1:27017/SoundScape")

connect.then(() => {
    console.log("Database connected");
})
.catch(() => {
    console.log("Database cennot be connected");
})
const songSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    album: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: false
    },
    url: {
        type: String,
        required: false
    }
});

const Song = mongoose.model('Song', songSchema);

module.exports = Song;