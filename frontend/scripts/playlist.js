document.addEventListener('DOMContentLoaded', async () => {
   const playlistList = document.getElementById('playlist-list');

   if (!playlistList) {
       console.error('Element not found');
       return;
   }

   try {
       const response = await fetch('/api/playlists');
       const playlists = await response.json();

       playlists.forEach(playlist => {
           addPlaylistToDOM(playlist);
       });

       document.querySelectorAll('.playlist-delete-button').forEach(button => {
           button.addEventListener('click', handleDeletePlaylist);
       });
   } catch (error) {
       console.error('Error fetching playlists:', error);
   }
});

function addPlaylistToDOM(playlist) {
   const playlistList = document.getElementById('playlist-list');

   const li = document.createElement('li');
   li.classList.add('playlist-name');
   li.dataset.playlistId = playlist._id;

   const div = document.createElement('div');
   div.classList.add('playlist-info');

   div.addEventListener('click', () => {
       window.location.href = `/playlist/${playlist._id}`;
   });

   const playlistTitel = document.createElement('p');
   playlistTitel.textContent = playlist.name;
   div.appendChild(playlistTitel);

   const playlistNameP = document.createElement('p');
   playlistNameP.classList.add('playlist-name-p');
   playlistNameP.textContent = `Playlist • ${playlist.author || 'Unknown'}`;
   div.appendChild(playlistNameP);

   const deleteButton = document.createElement('button');
   deleteButton.textContent = '✖';
   deleteButton.classList.add('playlist-delete', 'playlist-delete-button');
   deleteButton.dataset.playlistId = playlist._id;

   deleteButton.addEventListener('click', handleDeletePlaylist);

   li.appendChild(div);
   li.appendChild(deleteButton);
   playlistList.appendChild(li);
}

async function handleDeletePlaylist(event) {
   event.stopPropagation();
   const playlistId = event.target.dataset.playlistId;
   console.log(`Attempting to delete playlist with ID: ${playlistId}`);

   try {
       const deleteResponse = await fetch(`/api/playlists/${playlistId}`, {
           method: 'DELETE'
       });
       if (!deleteResponse.ok) {
           const errorText = await deleteResponse.text();
           console.error('Error deleting playlist', errorText);
           throw new Error('Failed to delete playlist');
       }
       const playlistItem = document.querySelector(`li[data-playlist-id="${playlistId}"]`);
       if (playlistItem) {
           playlistItem.remove();
       }
   } catch (error) {
       console.error('Error deleting playlist', error);
   }
}

document.getElementById('addPlaylistBtnClose').addEventListener('click', function () {
   document.getElementById('customDialogPlaylist').style.display = 'none';
   document.body.style.overflow = '';
   let blurOverlay = document.querySelector('.blur-overlay');
   if (blurOverlay) {
       blurOverlay.parentNode.removeChild(blurOverlay);
   }
});

document.getElementById('addPlaylistBtn').addEventListener('click', function () {
   document.getElementById('customDialogPlaylist').style.display = 'flex';
   document.body.style.overflow = 'hidden';
   var blurOverlay = document.createElement('div');
   blurOverlay.classList.add('blur-overlay');
   document.body.appendChild(blurOverlay);
});

function generatePlaylistId() {
   const playlistName = document.getElementById('playlistName').value.trim();
   const timestamp = new Date().toISOString();
   const url = playlistName.replace(/\s+/g, '-') + '-' + timestamp.slice(0, 10);
   return url;
}

function savePlaylistToDatabase(playlist, callback) {
   fetch('/api/playlists', {
       method: 'POST',
       headers: {
           'Content-Type': 'application/json'
       },
       body: JSON.stringify(playlist)
   })
   .then(response => response.json())
   .then(data => callback(null, data))
   .catch(error => callback(error));
}

function getCurrentUser(callback) {
   fetch('/auth/current-user', {
       method: 'GET',
       headers: {
           'Content-Type': 'application/json'
       },
       credentials: 'same-origin'
   })
   .then(response => {
       if (response.ok) {
           return response.json();
       } else {
           throw new Error('Failed to fetch current user');
       }
   })
   .then(data => callback(null, data))
   .catch(error => callback(error));
}

document.getElementById('addPlaylistCustom').addEventListener('click', function () {
   let playlistName = document.getElementById('playlistName').value.trim();
   if (playlistName) {
       getCurrentUser(function (err, currentUser) {
           if (err) {
               console.error('Error getting current user: ', err);
               return;
           }

           let playlistId = generatePlaylistId();
           let playlist = {
               name: playlistName,
               user: currentUser._id,
               author: currentUser.username
           };

           savePlaylistToDatabase(playlist, function (err, savedPlaylist) {
               if (err) {
                   console.error('Error saving playlist: ', err);
                   return;
               }

               addPlaylistToDOM(savedPlaylist);

               document.getElementById('customDialogPlaylist').style.display = 'none';
               document.body.style.overflow = '';
               let blurOverlay = document.querySelector('.blur-overlay');
               if (blurOverlay) {
                   blurOverlay.parentNode.removeChild(blurOverlay);
               }
           });
       });
   }
});
