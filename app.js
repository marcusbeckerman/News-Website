const api = require('./api/api')
const express = require('express')
const path = require('path')

let app = express()
app.set('view engine', 'pug')
app.use(express.static(path.join(__dirname, 'views')))

app.get('/', (req, res) => {
    api.countryTop('us')
        .then((data) => res.render('index', data))
})

app.listen(3000)