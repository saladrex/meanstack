const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database');

mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
    if (err) {
        console.log('Qrwa! Could NOT CONNECT to database', err);
        } else { 
            console.log(config.secret);
            console.log('Succesfully connected to the database !!!', + config.db);
        }
});

app.get('*', (req,res) => { // * any route / current route
    res.send('<h4>hello world</h4>');
});

app.listen(8080, () => {
    console.log('listening you on port 8080')
});
