// import { error } from "console";

let currentAudio = null;
let currentPlayButton = null;
let currentSongUrl = null;
let currentSongIndex = 0;
let isShuffle = false;
let isRepeat = false;
let songs = [];

const progressBar = document.querySelector('.progress-bar');
const volumeControl = document.querySelector('.controls-volume');
const playButton = document.querySelector('.player-controls-play');
const pauseButton = document.querySelector('.player-controls-pause');
const nextButton = document.querySelector('.player-controls-next');
const previousButton = document.querySelector('.player-controls-last');
const shuffleButton = document.querySelector('.player-controls-shuffle');
const repeatButton = document.querySelector('.player-controls-repeat');

function updateTrackInfo(song) {
  const trackInfoImg = document.querySelector('.track-info-img');
  const trackInfoSong = document.querySelector('.track-info-song');
  const trackInfoName = document.querySelector('.track-info-name');

  trackInfoImg.src = song.img;
  trackInfoImg.alt = song.name;
  trackInfoSong.textContent = song.name;
  trackInfoName.textContent = song.artist;
}

function updateProgressBar() {
  if (currentAudio && progressBar) {
    const progress = (currentAudio.currentTime / currentAudio.duration) * 100;
    progressBar.value = progress;
  }
}

function setAudioCurrentTime() {
  if (currentAudio && progressBar) {
    const newTime = (progressBar.value / 100) * currentAudio.duration;
    currentAudio.currentTime = newTime;
  }
}

function updateVolume() {
  if (currentAudio) {
    currentAudio.volume = volumeControl.value;
  }
}

function playSong(index) {
  const song = songs[index];
  if (!song) return;

  if (currentAudio) {
    currentAudio.pause();
    currentAudio.removeEventListener('timeupdate', updateProgressBar);
    currentAudio.removeEventListener('ended', onAudioEnded);
    currentPlayButton.innerHTML = '<img src="/img/svg/play-logo.svg" alt="Play">';
  }

  currentAudio = new Audio(song.url);
  currentPlayButton = playButton;
  currentSongUrl = song.url;
  currentSongIndex = index;

  currentAudio.addEventListener('timeupdate', updateProgressBar);
  currentAudio.addEventListener('ended', onAudioEnded);
  currentAudio.addEventListener('error', onAudioError);

  currentAudio.play().then(() => {
    playButton.innerHTML = '<img src="/img/svg/pause-logo.svg" alt="Pause">';
    updateTrackInfo(song);
    currentAudio.volume = volumeControl.value;
  }).catch(error => {
    console.error('Error playing audio:', error);
  });

}

function onAudioEnded() {
  if (isRepeat) {
    playSong(currentSongIndex);
  } else {
    playNextSong();
  }
}

function onAudioError(event) {
  console.error('Audio error', error);
}

function playNextSong() {
  if (isShuffle) {
    const randomIndex = Math.floor(Math.random() * songs.length);
    playSong(randomIndex);
  } else {
    const nextIndex = (currentSongIndex + 1) % songs.length;
    playSong(nextIndex);
  }
}

function playPreviousSongs() {
  const previousIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  playSong(previousIndex);
}

playButton.addEventListener('click', () => {
  if (currentAudio && currentAudio.paused) {
    currentAudio.play().then(() => {
      playButton.innerHTML = '<img src="/img/svg/pause-logo.svg" alt="Pause">';
    }).catch(error => {
      console.error('Error playing audio:', error);
    });
  } else if (currentAudio) {
    currentAudio.pause();
    playButton.innerHTML = '<img src="/img/svg/play-logo.svg" alt="Play">';
  } else {
    playSong(currentSongIndex);
  }
});

pauseButton.addEventListener('click', () => {
  if (currentAudio && !currentAudio.paused) {
    currentAudio.pause();
    playButton.innerHTML = '<img src="/img/svg/play-logo.svg" alt="Play">';
  }
});

nextButton.addEventListener('click', playNextSong);
previousButton.addEventListener('click', playPreviousSongs);

shuffleButton.addEventListener('click', () => {
  isShuffle = !isShuffle;
  shuffleButton.classList.toggle('active', isShuffle);
  shuffleButton.innerHTML = isShuffle
  ? '<img src="/img/svg/shuffle-red.svg" alt="Shuffle">'
  : '<img src="/img/svg/shuffle.svg" alt="Shuffle">';
});

repeatButton.addEventListener('click', () => {
  isRepeat = !isRepeat;
  repeatButton.classList.toggle('active', isRepeat);
  repeatButton.innerHTML = isRepeat
  ? '<img src="/img/svg/repeat-red.svg" alt="Shuffle">'
  : '<img src="/img/svg/repeat.svg" alt="Shuffle">';
});

volumeControl.addEventListener('input', updateVolume)
progressBar.addEventListener('input', setAudioCurrentTime);

export function handlePlayButtonClick(song, playButton) {
  const songIndex = songs.findIndex(s => s.url === song.url);
  if (songIndex !== -1) {
    playSong(songIndex);
  } else {
    console.error('Songs not found in the playlist');
  }
}

export function setSongs(songList) {
  songs = songList;
}