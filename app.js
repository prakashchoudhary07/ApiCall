const express = require('express');
const app = express();
const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

app.get('/', function (req, res) {
 res.send('<H1> Please make request to localhost/user/name </H1>') 
})

app.get('/user/:name', function (req, res) {
 res.json(req.params)
})

app.listen(port, () => console.log(`Server running at http://${hostname}:${port}/`))

