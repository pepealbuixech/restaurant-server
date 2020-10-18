const express = require('express');
const app = express();
const restaurants = require('./restaurants.json');

app.get('/restaurants', (req, res) => {
    res.send(restaurants);
});

app.listen(3000, () => {
    console.log('Listening port 3000');
});