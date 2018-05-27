require('dotenv').config();

const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

const movieRouter = require('./routes/movies');

app.use('/movies', movieRouter);
app.get('*', (req, res) => {
  res.send('welcome!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('http://localhost:' + PORT);
});
