let currentAudio = null;
let currentPlayButton = null;
let currentSongUrl = null;
const progressBar = document.querySelector('.progress-bar');
const volumeControl = document.querySelector('.controls-volume');

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

volumeControl.addEventListener('input', updateVolume)
progressBar.addEventListener('input', setAudioCurrentTime);

export function handlePlayButtonClick(song, playButton) {
  if (currentSongUrl === song.url) {
    if (currentAudio.paused) {
      currentAudio.play();
      playButton.innerHTML = '<img src="/img/svg/pause-logo.svg" alt="Pause">';
    } else {
      currentAudio.pause();
      playButton.innerHTML = '<img src="/img/svg/play-logo.svg" alt="Play">';
    }
  } else {
    if (currentAudio) {
      currentAudio.pause();
      currentPlayButton.innerHTML = '<img src="/img/svg/play-logo.svg" alt="Play">';
    }
    currentAudio = new Audio(song.url);
    currentPlayButton = playButton;
    currentSongUrl = song.url;

    currentAudio.play();
    playButton.innerHTML = '<img src="/img/svg/pause-logo.svg" alt="Pause">';

    updateTrackInfo(song);

    currentAudio.ontimeupdate = updateProgressBar;

    currentAudio.onended = () => {
      playButton.innerHTML = '<img src="/img/svg/play-logo.svg" alt="Play">';
    };
  }
}