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

function savePlaylistToDatabase (playlist, callback) {
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
   fetch ('/auth/current-user', {
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
         throw new Error('Failed to fetch current user')
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
           user: currentUser._id
        };

        savePlaylistToDatabase(playlist, function (err, savedPlaylist) {
           if (err) {
              console.error('Error saving playlist: ', err);
              return;
           }

           let playlistList = document.getElementById('playlist-list');
           let newPlaylistItem = document.createElement('li');
           newPlaylistItem.className = 'playlist-name';
           let newPlaylistLink = document.createElement('a');
           newPlaylistLink.href = '/playlist/' + savedPlaylist._id;
           newPlaylistLink.textContent = playlistName;
           newPlaylistItem.appendChild(newPlaylistLink);
           newPlaylistItem.dataset.playlistId = savedPlaylist._id;
           playlistList.insertBefore(newPlaylistItem, playlistList.lastElementChild);
           document.getElementById('customDialogPlaylist').style.display = 'none';
           document.body.style.overflow = "";
           let blurOverlay = document.querySelector('.blur-overlay');
           if (blurOverlay) {
              blurOverlay.parentNode.removeChild(blurOverlay);
           }
        });
     });
  }
});

