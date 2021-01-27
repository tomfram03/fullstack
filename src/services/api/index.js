const express = require('express');
const sequelize = require('sequelize');
const products = require('./database/products');

const app = express();

app.listen(8000);

app.get('/', (req, res) => {
    res.send('API funcionando corretamente!')
})