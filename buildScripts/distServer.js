const express = require('express')
const path = require('path');
const open = require('open');
const compression = require('compression');

/* eslint-disable no-console */

const app = express()
const port = 3000;

app.use(compression());
app.use(express.static('dist'));


app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../dist/index.html')))
app.get('/users', function(req, res) {
    // Hard coded for simplicity
    res.json([
        {"id": 1, "firstName": "Bob", "lastName": "Smith", "email": "bob.smith@gmail.com"},
        {"id": 2, "firstName": "Alice", "lastName": "Jones", "email": "alice.jones@gmail.com"},
        {"id": 3, "firstName": "Michael", "lastName": "Archangel", "email": "bible_is_fake@gmail.com"}
    ])
});

app.listen(port, function(err) {
    if(err) {
        console.log(err);
    } else {
        open('http://localhost:3000');    
    }
    console.log(`Example app listening on port ${port}!`);
}); 
