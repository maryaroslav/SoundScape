// const template = Handlebars.compile(document.getElementById('playlist-template').innerHTML);

const playlistSongs = document.getElementById("playlist-songs");
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const nextButton = document.getElementById("next");
const previousButton = document.getElementById("last");
const shuffleButton = document.getElementById("shuffle");

// document.getElementById('addPlaylistBtn').addEventListener('click', function () {
//    document.getElementById('customDialog').style.display = 'flex';
//    var blurOverlay = document.createElement('div'); // Создаем элемент для блюра
//    blurOverlay.id = 'blur-overlay'; // Устанавливаем ему id
//    document.body.appendChild(blurOverlay);
// });



// document.getElementById('addPlaylistCustom').addEventListener('click', function () {
//    var playlistName = document.getElementById('playlistName').value.trim();
//    if(playlistName) {
//       var playlistList = document.getElementById('playlist-list');
//       var newPlaylistItem = document.createElement('li');
//       newPlaylistItem.className = 'playlist-name';
//       newPlaylistItem.textContent = playlistName;
//       playlistList.insertBefore(newPlaylistItem, playlistList.lastElementChild);
//       document.getElementById('customDialog').style.display = 'none';
//       document.body.classList.remove('blur-overlay');
//    }
// });

// const searchForm = document.getElementById('search-form');
// const searchTermInput = document.getElementById('search-term');
// const songTableBody = document.getElementById('song-table-body');
// const galleryContainer = document.querySelector('.gallery__container');

// searchForm.addEventListener('submit', async (event) => {
//    event.preventDefault();

//    const searchTerm = searchTermInput.value.trim();
//    if (searchTerm) {
//       try {
//          const response = await fetch('/search?term=' + searchTerm);
//          const songs = await response.json;

//          songTableBody.innerHTML = '';
//          galleryContainer.style.display = 'none';

//          songs.forEach(song => {
//             const tableRow = document.createElement('tr');
//             const songNameCell = tableRow.querySelector('.song-name')
//             songNameCell.innerHTML = song.name;

//             const songNameOverlay = songNameCell.querySelector('.song-name-overlay');
//             const songNameImage = songNameOverlay.querySelector('.song-name-img');
//             songNameImage.src = song.img;

//             const playButton = songNameOverlay.querySelector('.play-icon');

//             const artistCell = tableRow.querySelector('td.artist');
//             artistCell.innerHTML = song.artist;

//             const albumCell = tableRow.querySelector('td.album');
//             albumCell.innerHTML = song.album;

//             const durationCell = tableRow.querySelector('td.duration');
//             durationCellCell.innerHTML = song.duration;

//             songTableBody.appendChild(tableRow);
//          })
//       } catch (err) {
//          console.log(err);
//       }
//    }
// });




// document.getElementById('addPlaylistCustom').addEventListener('click', async function () {
//    const playlistName = document.getElementById('playlistName').value.trim();
//    if(!playlistName) {
//       const user = await User.findById(req.user._id);

//       user.playlists.push({
//          name: playlistName,
//          description: ''
//       });

//       await user.save()

//       const playlistList = document.getElementById('playlist-list');
//       const newPlaylistItem = createPlaylistItem(playlistName);
//       playlistList.insertBefore(newPlaylistItem, playlistList.lastElementChild);
//    }
// });

// function createPlaylistItem() {
//    const newPlaylistItem = document.createElement('li');
//    newPlaylistItem.className = 'playlist-name';
//    const newPlaylistLink = document.createElement('p');
//    newPlaylistLink.href = 'playlist.html';
//    newPlaylistLink.textContent = playlistName;
//    newPlaylistItem.appendChild(newPlaylistLink);
//    return newPlaylistItem;
// }


// document.getElementById('addPlaylistBtnClose').addEventListener('click', function () {
//    document.getElementById('customDialog').style.display = 'none';
//    document.body.style.overflow = '';
//    var blurOverlay = document.querySelector('.blur-overlay');
//    if (blurOverlay) {
//       blurOverlay.parentNode.removeChild(blurOverlay);
//    }
// });

// document.getElementById('addPlaylistBtn').addEventListener('click', function () {
//    document.getElementById('customDialog').style.display = 'flex';
//    document.body.style.overflow = 'hidden';
//    var blurOverlay = document.createElement('div');
//    blurOverlay.classList.add('blur-overlay');
//    document.body.appendChild(blurOverlay);
// });

// document.getElementById('addPlaylistCustom').addEventListener('click', function () {
//    var playlistName = document.getElementById('playlistName').value.trim();
//    if(playlistName) {
//       var playlistList = document.getElementById('playlist-list');
//       var newPlaylistItem = document.createElement('li');
//       newPlaylistItem.className = 'playlist-name';
//       var newPlaylistLink = document.createElement('a');
//       newPlaylistLink.href = 'playlist.html';
//       newPlaylistLink.textContent = playlistName;
//       newPlaylistItem.appendChild(newPlaylistLink);
//       playlistList.insertBefore(newPlaylistItem, playlistList.lastElementChild);
//       document.getElementById('customDialog').style.display = 'none';
//       document.body.style.overflow = '';
//       var blurOverlay = document.querySelector('.blur-overlay');
//       if (blurOverlay) {
//          blurOverlay.parentNode.removeChild(blurOverlay);
//       }
//    }
// });

// document.getElementById('addPlaylistCustom').addEventListener('click', function () {
//    var playlistName = document.getElementById('playlistName').value.trim();
//    if (playlistName) {
//       fetch('/playlist', {
//          method: 'POST',
//          headers: {
//             'Content-Type': 'application/json'
//          },
//          body: JSON.stringify({ playlistName: playlistName })
//       })
//       .then(response => response.json())
//       .then(data => {
//          if (data.success) {
//             var playlistLink = data.link;
//             var playlistList = document.getElementById('playlist-list');
//             var newPlaylistItem = document.createElement('li');
//             newPlaylistItem.className = 'playlist-name';
//             var newPlaylistLink = document.createElement('a');
//             newPlaylistLink.href = `playlist.html?link=${playlistLink}`;
//             newPlaylistLink.textContent = playlistName;
//             newPlaylistItem.appendChild(newPlaylistLink);
//             playlistList.insertBefore(newPlaylistItem, playlistList.lastElementChild);
//             document.getElementById('customDialog').style.display = 'none';
//             document.body.style.overflow = '';
//             var blurOverlay = document.querySelector('.blur-overlay');
//             if (blurOverlay) {
//                blurOverlay.parentNode.removeChild(blurOverlay);
//             }
//          } else {
//             alert(data.message);
//          }
//       })
//       .catch(error => console.error('Ошибка при отправке запроса:', error));
//    }
// });


const allSongs = [
   {
      img: "img/song album/_.jpg",
      id: 0,
      title: "Hotel California",
      artist: "Eagles",
      album: "Hotel California",
      duration: "4:25",
      src: "songs/eagles-hotel-california.mp3",
   },
   {
    img: "img/song album/(no title).jpg",
      id: 1,
      title: "Can't Stay Down",
      artist: "Quincy Larson",
      album: "Imagine",
      duration: "4:15",
      src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/cant-stay-down.mp3",
   },
   {
    img: "img/song album/mfEDlmtv.jpg",
      id: 2,
      title: "Still Learning",
      artist: "Quincy Larson",
      album: "Nevermind",
      duration: "3:51",
      src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/still-learning.mp3",
   },
   {
    img: "img/song album/Qtis_l37.jpg",
      id: 3,
      title: "Cruising for a Musing",
      artist: "Quincy Larson",
      album: "Led Zeppelin IV",
      duration: "3:34",
      src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/cruising-for-a-musing.mp3",
   },
   {
      id: 4,
      title: "Never Not Favored",
      artist: "Quincy Larson",
      album: "Hey Jude",
      duration: "3:35",
      src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/never-not-favored.mp3",
   },
   {
      id: 5,
      title: "From the Ground Up",
      artist: "Quincy Larson",
      album: "Thriller",
      duration: "3:12",
      src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/from-the-ground-up.mp3",
   },
   {
      id: 6,
      title: "Walking on Air",
      artist: "Quincy Larson",
      album: "Are You Experienced",
      duration: "3:25",
      src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/walking-on-air.mp3",
   },
   {
      id: 7,
      title: "Can't Stop Me. Can't Even Slow Me Down.",
      artist: "Quincy Larson",
      album: "Imagine",
      duration: "3:52",
      src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/cant-stop-me-cant-even-slow-me-down.mp3",
   },
   {
      id: 8,
      title: "The Surest Way Out is Through",
      artist: "Quincy Larson",
      album: "Imagine",
      duration: "3:10",
      src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/the-surest-way-out-is-through.mp3",
   },
   {
      id: 9,
      title: "Chasing That Feeling",
      artist: "Quincy Larson",
      album: "Imagine",
      duration: "2:43",
      src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/chasing-that-feeling.mp3",
   },
   {
      id: 10,
      title: "Автобус буратін",
      artist: "Mad Heads XL",
      album: "Imagine",
      duration: "03:24",
      src: "https://github.com/Andrii1978/growfy/blob/main/Mad%20Heads%20XL%20-%20%D0%90%D0%B2%D1%82%D0%BE%D0%B1%D1%83%D1%81%20%D0%B1%D1%83%D1%80%D0%B0%D1%82%D1%96%D0%BD.mp3",
   },
];

// Получаем ссылку на таблицу, в которую будем вставлять данные
const table = document.getElementById("song-table");

// Проходимся по массиву с песнями
allSongs.forEach(song => {
    // Создаем новую строку таблицы
    const row = document.createElement("tr");

    // Создаем ячейки для каждого свойства песни
    const songNameCell = document.createElement("td");
    songNameCell.classList.add("song-name");

    const songNameOverlay = document.createElement("div");
    songNameOverlay.classList.add("song-name-overlay");

    const songNameImg = document.createElement("img");
    songNameImg.classList.add("song-name-img");
    songNameImg.src = song.img;
    songNameImg.alt = song.title;

    const playIconBtn = document.createElement("button");
    playIconBtn.classList.add("play-icon");

    const playIconImg = document.createElement("img");
    playIconImg.src = "img/svg/play-logo.svg";
    playIconImg.alt = "";

    const songTitle = document.createTextNode(song.title);

    // Добавляем созданные элементы в DOM
    playIconBtn.appendChild(playIconImg);
    songNameOverlay.appendChild(songNameImg);
    songNameOverlay.appendChild(playIconBtn);
    songNameCell.appendChild(songNameOverlay);
    songNameCell.appendChild(songTitle);
    row.appendChild(songNameCell);

    const artistCell = document.createElement("td");
    artistCell.textContent = song.artist;
    row.appendChild(artistCell);

    const albumCell = document.createElement("td");
    albumCell.textContent = song.album;
    row.appendChild(albumCell);

    const durationCell = document.createElement("td");
    durationCell.textContent = song.duration;
    row.appendChild(durationCell);

    // Добавляем строку в таблицу
    table.appendChild(row);
});


const audio = new Audio();
let userData = {
   songs: [...allSongs],
   currentSong: null,
   songCurrentTime: 0,
};

playButton.addEventListener("click", () => {
    playSong(userData?.currentSong.id); // Вызываем функцию playSong для начала воспроизведения
});

pauseButton.addEventListener("click", () => {
    pauseSong(); // Вызываем функцию pauseSong для остановки воспроизведения
});

// Обновляем кнопки воспроизведения в зависимости от состояния аудиоплеера
audio.addEventListener("play", () => {
    playButton.style.display = "none";
    pauseButton.style.display = "block";
});

audio.addEventListener("pause", () => {
    playButton.style.display = "block";
    pauseButton.style.display = "none";
});

// Добавляем обработчик события 'ended' для автоматического переключения на следующую песню
audio.addEventListener("ended", () => {
    playNextSong();
});

const playSong = (id) => {
   const song = userData?.songs.find((song) => song.id === id);
   audio.src = song.src;
   audio.title = song.title;

   if (userData?.currentSong === null || userData?.currentSong.id !== song.id) {
      audio.currentTime = 0;
   } else {
      audio.currentTime = userData?.songCurrentTime;
   }
   userData.currentSong = song;
   playButton.classList.add("playing");

   highlightCurrentSong();
   setPlayerDisplay();
   setPlayButtonAccessibleText();
   audio.play();
};

const pauseSong = () => {
   userData.songCurrentTime = audio.currentTime;

   playButton.classList.remove("playing");
   audio.pause();
};

const playNextSong = () => {
   if (userData?.currentSong === null) {
      playSong(userData?.songs[0].id);
   } else {
      const currentSongIndex = getCurrentSongIndex();
      const nextSong = userData?.songs[currentSongIndex + 1];

      playSong(nextSong.id);
   }
};

const playPreviousSong = () => {
   if (userData?.currentSong === null) return;
   else {
      const currentSongIndex = getCurrentSongIndex();
      const previousSong = userData?.songs[currentSongIndex - 1];

      playSong(previousSong.id);
   }
};

const shuffle = () => {
   userData?.songs.sort(() => Math.random() - 0.5);
   userData.currentSong = null;
   userData.songCurrentTime = 0;

   renderSongs(userData?.songs);
   pauseSong();
   setPlayerDisplay();
   setPlayButtonAccessibleText();
};

const deleteSong = (id) => {
   if (userData?.currentSong?.id === id) {
      userData.currentSong = null;
      userData.songCurrentTime = 0;

      pauseSong();
      setPlayerDisplay();
   }

   userData.songs = userData?.songs.filter((song) => song.id !== id);
   renderSongs(userData?.songs);
   highlightCurrentSong();
   setPlayButtonAccessibleText();

   if (userData?.songs.length === 0) {
      const resetButton = document.createElement("button");
      const resetText = document.createTextNode("Reset Playlist");

      resetButton.id = "reset";
      resetButton.ariaLabel = "Reset playlist";
      resetButton.appendChild(resetText);
      playlistSongs.appendChild(resetButton);

      resetButton.addEventListener("click", () => {
         userData.songs = [...allSongs];

         renderSongs(sortSongs());
         setPlayButtonAccessibleText();
         resetButton.remove();
      });

   }

};

const setPlayerDisplay = () => {
    const playingImg = document.getElementById("player-song-img");
    const playingSong = document.getElementById("player-song-title");
    const songArtist = document.getElementById("player-song-artist");
    const currentImg = userData?.currentSong?.img;
    const currentTitle = userData?.currentSong?.title;
    const currentArtist = userData?.currentSong?.artist;
    
    playingImg.src = currentImg ? currentImg : "img/song album/acdc.png";
    playingSong.textContent = currentTitle ? currentTitle : "";
    songArtist.textContent = currentArtist ? currentArtist : "";
 };
 
 const highlightCurrentSong = () => {
    const playlistSongElements = document.querySelectorAll(".playlist-song");
    const songToHighlight = document.getElementById(
       `song-${userData?.currentSong?.id}`
    );
 
    playlistSongElements.forEach((songEl) => {
       songEl.removeAttribute("aria-current");
    });
 
    if (songToHighlight) songToHighlight.setAttribute("aria-current", "true");
 };
 
 const renderSongs = (array) => {
    const songsHTML = array
       .map((song) => {
          return `
       <li id="song-${song.id}" class="playlist-song">
       <button class="playlist-song-info" onclick="playSong(${song.id})">
           <span class="playlist-song-title">${song.title}</span>
           <span class="playlist-song-artist">${song.artist}</span>
           <span class="playlist-song-duration">${song.duration}</span>
       </button>
       <button onclick="deleteSong(${song.id})" class="playlist-song-delete" aria-label="Delete ${song.title}">
           <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="8" fill="#4d4d62"/>
           <path fill-rule="evenodd" clip-rule="evenodd" d="M5.32587 5.18571C5.7107 4.90301 6.28333 4.94814 6.60485 5.28651L8 6.75478L9.39515 5.28651C9.71667 4.94814 10.2893 4.90301 10.6741 5.18571C11.059 5.4684 11.1103 5.97188 10.7888 6.31026L9.1832 7.99999L10.7888 9.68974C11.1103 10.0281 11.059 10.5316 10.6741 10.8143C10.2893 11.097 9.71667 11.0519 9.39515 10.7135L8 9.24521L6.60485 10.7135C6.28333 11.0519 5.7107 11.097 5.32587 10.8143C4.94102 10.5316 4.88969 10.0281 5.21121 9.68974L6.8168 7.99999L5.21122 6.31026C4.8897 5.97188 4.94102 5.4684 5.32587 5.18571Z" fill="white"/></svg>
         </button>
       </li>
       `;
       })
       .join("");
 
    playlistSongs.innerHTML = songsHTML;
 };
 
 const setPlayButtonAccessibleText = () => {
    const song = userData?.currentSong || userData?.songs[0];
 
    playButton.setAttribute(
       "aria-label",
       song?.title ? `Play ${song.title}` : "Play"
    );
 };
 
 const getCurrentSongIndex = () => userData?.songs.indexOf(userData?.currentSong);
 
 playButton.addEventListener("click", () => {
    if (userData?.currentSong === null) {
       playSong(userData?.songs[0].id);
    } else {
       playSong(userData?.currentSong.id);
    }
 });
 
 pauseButton.addEventListener("click", pauseSong);
 
 nextButton.addEventListener("click", playNextSong);
 
 previousButton.addEventListener("click", playPreviousSong);
 
 shuffleButton.addEventListener("click", shuffle);
 
 audio.addEventListener("ended", () => {
    const currentSongIndex = getCurrentSongIndex();
    const nextSongExists = userData?.songs[currentSongIndex + 1] !== undefined;
 
    if (nextSongExists) {
       playNextSong();
    } else {
       userData.currentSong = null;
       userData.songCurrentTime = 0;
       pauseSong();
       setPlayerDisplay();
       highlightCurrentSong();
       setPlayButtonAccessibleText();
    }
 });
 
 const sortSongs = () => {
    userData?.songs.sort((a, b) => {
       if (a.title < b.title) {
          return -1;
       }
 
       if (a.title > b.title) {
          return 1;
       }
 
       return 0;
    });
 
    return userData?.songs;
 };
 
 renderSongs(sortSongs());
 setPlayButtonAccessibleText();

//БИБЛИОТЕКА И ПЛЕЙЛИСТ - ПОЯВЛЯЕТСЯ ПРИ ВХОДЕ В АККАУНТ
// async function fetchUserData() {
//    const response = await fetch('/api/user', {
//       headers: {
//          Authorization: `Bearer ${getTokenFromStorage()}`
//       }
//    });
//    const data = await response.json();
//    return data;
// }

// async function updatePlaylistVisibility() {
//    const userData = await fetchUserData();
//    if (userData.isLoggedIn) {
//       const playlistLibrary = document.querySelector('.playlist-library');
//       const playlistPlaylist = document.querySelector('.playlist-playlist');
//       playlistLibrary.style.display = 'block';
//       playlistPlaylist.style.display = 'block';
//    }
// }

// updatePlaylistVisibility();