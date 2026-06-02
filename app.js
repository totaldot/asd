const express = require('express');
const db = require('./db');
const app = express();
const path = require('path');
const bcrypt = require('bcrypt');
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.get('/', (_, res) => {
    res.render('index')
});
app.get('/register', (_, res) => {
    res.render('register');
});
app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const hashPas = await bcrypt.hash(password, 10);
    db.query('INSERT INTO usrs (username, password) VALUES (?, ?)', [username, hashPas]);
    res.redirect('/login');
});
app.get('/login', (_, res) => {
    res.render('login');
});
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const hashPas = await bcrypt.hash(password, 10);
    db.query('SELECT * FROM users WHERE (username) and (password)', [username, hashPas]);
    res.redirect('/');
});
app.listen(port)


