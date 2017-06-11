var path = require('path');
var express = require('express');

var app = express();

app.listen(8080);

app.use(compression());
app.use(express.static(path.join(__dirname, 'dist')));

app.use(function(req, res)
{
        res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

module.exports = app;