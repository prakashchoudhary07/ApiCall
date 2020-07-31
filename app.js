const express = require('express')
const app = express()
const hostname = process.env.PORT || '127.0.0.1';
const port = 3000

app.get('/', (req, res) => res.send('<H1> Please make request to localhost/user/name </H1>'))

app.get('/user/:name', function (req, res) {
 res.json(req.params)
})

app.listen(port, () => console.log(`Server running at http://${hostname}:${port}/`))

