function generatePlaylistId() {
    const playlistName = document.getElementById('playlistName').value.trim();
    const timestamp = new Date().toISOString();
    const url = playlistName.replace(/\s+/g, '-') + '-' + timestamp.slice(0, 10);
    return url;
}

module.exports = generatePlaylistId;