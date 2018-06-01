const express = require('express');
const app = express();

app.get('/', () => {
    res.send({data: ['happyness', 1, 2, 3]});
})


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('http://localhost:' + PORT);
});