const express = require('express');
const app = express();
const restaurants = require('./restaurants.json');

app.use(express.json);

app.get('/restaurants', (req, res) => {
    console.log('GET /restaurants');
    res.send(restaurants);
}); 

app.get('/', (req, res) => {
   console.log('GET /');
   res.send("Merdapatu");
});

const port = process.env.PORT || '5000';

app.listen(port, () => {
    console.log(`Listening port ${port}`);
});
