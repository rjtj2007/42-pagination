require('dotenv').config();

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

const express = require('express');
const app = express();

// const Bundler = require('parcel-bundler');
// const options = {
//   publicUrl: './',
// };
// const bundler = new Bundler('./public/index.html', options);
// app.use(bundler.middleware());

const movieRouter = require('./routes/movies');

app.get('/welcome', (req, res) => {
  console.log('dish out welcome')
  res.send('welcome!');
});

const PORT = process.env.PORT || 3000;
app.use(express.static(__dirname + '/dist'))
app.listen(PORT, () => {
  console.log('http://localhost:' + PORT);
});
