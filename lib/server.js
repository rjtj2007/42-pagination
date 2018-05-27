const express = require('express');
const app = express();

app.get('*', (req, res) => {
  res.send('poop');
});

const PORT = process.env.PORT || 3000;
app.list(PORT, () => {
  console.log('http://localhost:' + PORT);
});
