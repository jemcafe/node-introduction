// The server folder must be in the root
const express = require('express'); // similar to -> import express from 'express'
const bodyParser = require('body-parser');
// const cors = require('cors');
const bc = require('./controllers/books_controller');  //bc - is just short for books_controller, it's just a variable name

const app = express();
app.use(bodyParser.json());
// app.use(cors());
app.use(express.static('../public/build'));

app.post('/api/books', bc.create);   // when someone posts it follows the books_controller instructions
app.get('/api/books', bc.read);
app.put('/api/books/:id', bc.update);
app.delete('/api/books/:id', bc.delete);

app.listen(3000, () => {
    console.log('Server listening on port: ' + 3000);
});