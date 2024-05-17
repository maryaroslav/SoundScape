const mongoose = require('mongoose');
const Song = require('./models/song');
const fs = require('fs');

(async () => {
  const songsData = JSON.parse(fs.readFileSync('songs.json'));

  for (const songData of songsData) {
    const song = new Song(songData);
    try {
      await song.save();
      console.log('Песня добавлена успешно');
    } catch (err) {
      console.error(err);
    }
  }
})();