const express = require('express');
const app = express();
const methodOverride = require('method-override');
const mongoose = require('mongoose');
require('dotenv').config();

const PORT = process.env.PORT;

app.get('/', (req,res) => {
    res.send('hello')
})

app.listen(PORT, () => console.log('app listening on', PORT))