const express = require('express');
const cors= require('cors');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const mongoose = require('mongoose');
const users = require('./routes/users');
const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/eunimart')
    .then(() => console.log('Now connected to MongoDB!'))
    .catch(err => console.error('Something went wrong', err));

app.use(express.json());
app.use('/api/users', users);

const port = 43210;
// app.listen(port, () => console.log(`Listening on port ${port}...`));
 
 

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
