const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/user');


router.post('/sign-up', async (req, res) => {
    const { username, email, password } = req.body;
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = new User({
        username,
        email,
        password: hashedPassword
    });

    await user.save();
    res.redirect('/auth/sign-in')
});

router.post('/sign-in', async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    if (!user) {
        return res.status(404).send('Polzovatel nenajden.');
    };

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        return res.status(401).send('Parol nevernyji.');
    };

    req.session.user = user;

    res.redirect('/');
});

router.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).send('Ошибка при выходе.');
        }
        res.redirect('/');
    });
});

router.get('/current-user', (req, res) => {
    if (req.session.user) {
        res.json(req.session.user);
    } else {
        res.status(401).json({ error: 'Not auth' });
    }
});

module.exports = router;