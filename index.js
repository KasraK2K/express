const express = require('express')
const app = express()

app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res) {
    res.send(`
        <h1>you are in home page</h1>
        <p>we did not export any module</p>
    `);
}); //home

app.get('/:anyRoute', function(req, res) {
    res.send(`
        <h1>you are in ${req.params.anyRoute} page</h1>
        <p>we did not export any module in ${req.params.anyRoute}</p>
    `);
}); //any route

var server = app.listen(app.get('port'), console.log(`express in running at port ` + app.get('port')));