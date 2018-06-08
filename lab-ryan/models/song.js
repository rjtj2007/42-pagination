const mongoose = require('mongoose');


//song data Number,Year,Album,Artist,Genre,Subgenre
const SongSchema = new mongoose.Schema({
    number: Number,
    // year: Number,
    // album: String,
    artist: String,
    // genre: String,
});

module.exports = mongoose.model('Song', SongSchema);