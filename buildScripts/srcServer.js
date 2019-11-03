const express = require('express')
const path = require('path');
const open = require('open');
const webpack = require('webpack');
const config = require('../webpack.config.dev');

/* eslint-disable no-console */

const app = express()
const port = 3000
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../src/index.html')))

app.listen(port, function(err) {
    if(err) {
        console.log(err);
    } else {
        open('http://localhost:3000');    
    }
    console.log(`Example app listening on port ${port}!`);
}); 
