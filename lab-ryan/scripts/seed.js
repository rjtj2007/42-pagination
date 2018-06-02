require('dotenv').config();

const fs = require('fs');

const Song = require('../models/song.js');
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

Song.remove({})
.then(() => {
    return new Promise((resolve, reject) => {
        fs.readFile('./songdata.csv', 'utf-8', (err, data) => {
           let lines = data.split('\n');
           let saves = lines.map(line => {
               let[_, artist, ...title] = line.split(' ');
               title = title.join(' ');
               return Song.create({artist, title})
           });

           Promise.all(saves)
           .then(() => {
               console.log('resolved', saves.length);
               resolve();
           })
           .catch(() => {
               console.log('rejected');
               reject();
           });
        });
    });
})
.then(() => {
    return Song.find({})
})
.then(songs => {
    console.log('queried: ', songs.length);
})
.then(() => {
    console.log('disconnected');
    mongoose.disconnect();
});