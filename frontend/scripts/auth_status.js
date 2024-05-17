const userStatusElement = document.getElementById('user-status');

async function checkLoginStatus() {
    const response = await fetch('/auth/logged', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('authToken')}`
        }
    });

    if (response.ok) {
        const data = await response.json();

        if (data.isLoggedIn) {
            // Если пользователь авторизован, скрываем кнопку входа и показываем фотографию пользователя
            document.getElementById('loginButton').style.display = 'none';
            document.getElementById('userIcon').style.display = 'flex';
        } else {
            // Если пользователь не авторизован, скрываем фотографию пользователя и показываем кнопку входа
            document.getElementById('loginButton').style.display = 'flex';
            document.getElementById('userIcon').style.display = 'none';
        }
    } else {
        console.error('Error', response.statusText);
    }
}

async function loadPlaylists() {
    try {
        const response = await fetch('/playlists', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('authToken')}`
            }
        });

        if (response.ok) {
            const playlists = await response.json();
            displayPlaylists(playlists);
        } else {
            console.error('Ошибка загрузки плейлистов', response.statusText);
        }
    } catch (error) {
        console.error('Ошибка:', error);
    }
}

function displayPlaylists(playlists) {
    const playlistListElement = document.getElementById('playlist-list');
    
    playlists.forEach(playlist => {
        const listItem = document.createElement('li');
        listItem.className = 'playlist-name';
        listItem.dataset.playlistId = playlist._id;

        const link = document.createElement('a');
        link.href = `/playlist/${playlist._id}`;
        link.textContent = playlist.name;

        listItem.appendChild(link);
        playlistListElement.appendChild(listItem);
    });
}

window.onload = checkLoginStatus;
