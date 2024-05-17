const searchInput = document.getElementById('search-term');
const songTable = document.getElementById('song-table-body');
const galleryContainer = document.querySelector('.gallery__container');

searchInput.addEventListener('keyup', () => {
  const searchTerm = searchInput.value.trim();
  if (searchTerm) {
    searchSongs(searchTerm);
  }
});

async function searchSongs(searchTerm) {
  const response = await fetch(`/api/songs/search?term=${searchTerm}`);
  const songs = await response.json();
  displaySearchResults(songs);
}

function displaySearchResults(songs) {
  songTable.innerHTML = ''; // Очистить таблицу перед добавлением новых строк
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
  const songNameOverlay = document.createElement('div');
  songNameOverlay.classList.add('song-name-overlay');

  const songImage = document.createElement('img');
  songImage.src = song.image || 'songs/img/prodavec-koshmarov.jpg'; // Заменить на ваш URL изображения по умолчанию
  songImage.alt = song.name;
  songNameOverlay.appendChild(songImage);

  const playButton = document.createElement('button');
  playButton.classList.add('play-icon');
  playButton.innerHTML = '<img src="img/svg/play-logo.svg" alt="Play">';
  songNameOverlay.appendChild(playButton);

  const songName = document.createElement('span');
  songName.classList.add('song-name');
  songName.textContent = song.name;
  songNameOverlay.appendChild(songName);

  cell.appendChild(songNameOverlay);
  return cell;
}