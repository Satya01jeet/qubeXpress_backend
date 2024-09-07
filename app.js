const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/qubeXpress');

app.listen(3000, (req,res) => {
    console.log(`app is running`)
});