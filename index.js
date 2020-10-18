const express = require('express');
const app = express();
const restaurants = require('./restaurants.json');

app.get('/restaurants', (req, res) => {
    res.send(restaurants);
});

app.listen(80, () => {
    console.log('Listening port 80');
});
