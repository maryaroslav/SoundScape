let currentAudio = null;
let currentPlayButton = null;
let currentSongUrl = null; 

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

    currentAudio.onended = () => {
      playButton.innerHTML = '<img src="/img/svg/play-logo.svg" alt="Play">';
    };
  }
}






