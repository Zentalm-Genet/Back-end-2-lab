const express = require('express')
const path = require('path');
const cors = require('cors');
const app = express()
const { getHouses, createHouse, deleteHouses, upadtePrice } = require('./controller.js');

const PORT = 4000;
const baseURL = '/api/houses';


app.use(express.json())
app.use(cors());
app.use(express.static(__dirname + '/static'));

app.get('/', (req, res) => {
    res.sendFile('static/index.html', {root: __dirname});
})

app.get(baseURL, getHouses);
app.post(baseURL, createHouse);
app.delete(`${baseURL}/:deleteId`, deleteHouses);
app.put(`${baseURL}/:updateId`, upadtePrice)

app.listen(4000, () => console.log(`Server running on port ${PORT}`))