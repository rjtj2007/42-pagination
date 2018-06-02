require('dotenv').config();

// const mongoose = require('mongoose');
// mongoose.connect(process.env.MONGODB_URI);

const express = require('express');
const app = express();

const songRouter = require('./routes/songs.js');
app.use('/songs', songRouter);

app.get('/welcome', (req, res) => {
    console.log('welcome to our song app');
    res.send('welcome');
});

// app.get('/', (req, res) => {
//     res.send({data: ['happyness', 1, 2, 3]});
// })

const Bundler = require('parcel-bundler');
const bundler = new Bundler('./public/index.html');
app.use(bundler.middleware());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('http://localhost:' + PORT);
});