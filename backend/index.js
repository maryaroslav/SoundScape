const express = require('express');
const path = require('path');
const session = require('express-session');
const authRouter = require('./routes/auth');
const songRouter = require('./routes/search_song');
const playlistRouter = require('./routes/playlist');
const Playlist = require('./models/playlist');

const app = express();


app.use(session({
    secret: 'key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/auth', authRouter);
app.use('/api/songs/search', songRouter)
app.use('/api/playlists', playlistRouter);

app.use(express.static(path.join(__dirname, '..', 'frontend')));

app.get('/', async (req, res) => {
    const user = req.session.user;
    const isLoggedIn = !!user;
    const filePath = path.join(__dirname, '../frontend', 'index.html')
    res.sendFile(filePath, { user });
});

app.get('/search', (req, res) => {
    const filePath = path.join(__dirname, '../frontend', 'search.html')
    res.sendFile(filePath);
});

app.get('/auth/sign-in', (req, res) => {
    const filePath = path.join(__dirname, '../frontend', 'sign-in.html')
    res.sendFile(filePath);
});

app.get('/auth/sign-up', (req, res) => {
    const filePath = path.join(__dirname, '../frontend', 'sign-up.html')
    res.sendFile(filePath);
});

app.get('/auth/logged', (req, res) => {
    const user = req.session.user;
    if (user) {
        res.json({ isLoggedIn: true });
    } else {
        res.json({ isLoggedIn: false });
    }
});

app.get('/playlist/:id', (req, res) => {
    const filePath = path.join(__dirname, '../frontend', 'playlist.html')
    res.sendFile(filePath);
})

app.post('/api/playlists', async (req, res) => {
    try {
        const newPlatlist = new Playlist(req.body);
        const savedPlaylist = await newPlatlist.save();
        res.json(savedPlaylist)
    } catch (error) {
        console.error('Error saving playlist: ', error);
        res.status(500).send('Error saving playlist')
    }
});

app.get('/protected-route', async (req, res) => {
  if (!req.session.user) {
    return res.status(401).send('You need to log in');
}
    const user = req.session.user;
    console.log(`Current user: ${user.username} (${user.email})`);
    res.send('Accessing a secure route');
});


app.listen(3000, () => {
    console.log('Server is running on port 3000.');
});