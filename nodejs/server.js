// server.js
const express = require('express');
const app = express();
const path = require('path');
const http = require('http').Server(app);

const port = 4001;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/api', function(req, res) {
    res.send('.');
});

http.listen(port, function() {
    console.log(`listening on port:${port}`);
});