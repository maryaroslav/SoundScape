import { handlePlayButtonClick } from './player.js';

const songTable = document.getElementById('song-table-body');
const galleryContainer = document.querySelector('.gallery__container');

document.addEventListener('DOMContentLoaded', () => {
  const searchForm = document.getElementById('search-form');

  if (!searchForm) {
    return;
  }

  searchForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const searchTermInput = document.getElementById('search-term');
    if (!searchTermInput) {
      return;
    }

    const searchTerm = searchTermInput.value.trim();
    if (searchTerm) {
      await searchSong(searchTerm);
    }
  });
});

async function searchSong(searchTerm) {
  try {
    const response = await fetch(`/api/songs/search?term=${searchTerm}`);
    if (!response.ok) {
      throw new Error('Failed to fetch search results');
    }
    const songs = await response.json();
    displaySearchResults(songs);
  } catch (error) {
    console.error('Error searching songs:', error);
  }
}

function displaySearchResults(songs) {
  songTable.innerHTML = '';
  galleryContainer.style.display = 'none';
  songs.forEach(song => {
    const row = document.createElement('tr');

    const songNameCell = createSongNameCell(song);
    const artistCell = createCell(song.artist);
    const albumCell = createCell(song.album);
    const durationCell = createCell(song.duration);

    row.appendChild(songNameCell);
    row.appendChild(artistCell);
    row.appendChild(albumCell);
    row.appendChild(durationCell);

    songTable.appendChild(row);
  });
}

function createCell(text) {
  const cell = document.createElement('td');
  cell.textContent = text;
  return cell;
}

function createSongNameCell(song) {
  const cell = document.createElement('td');
  cell.classList.add('song-name');
  const songNameOverlay = document.createElement('div');
  songNameOverlay.classList.add('song-name-overlay');

  const songImage = document.createElement('img');
  songImage.src = song.img;
  songImage.alt = song.name;
  songImage.classList.add('song-name-img');
  songNameOverlay.appendChild(songImage);

  const playButton = document.createElement('button');
  playButton.classList.add('play-icon');
  playButton.innerHTML = '<img src="/img/svg/play-logo.svg" alt="Play">';
  songNameOverlay.appendChild(playButton);

  playButton.addEventListener('click', () => {
    handlePlayButtonClick(song, playButton);
  })

  cell.appendChild(songNameOverlay);

  const songName = document.createElement('span');
  songName.textContent = song.name;
  cell.appendChild(songName);

  return cell;
}