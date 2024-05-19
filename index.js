const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Hello World!')
})

const lista = ['Java', 'Kotlin', 'Androoid']

app.get('/personagem', function (req, res) {
    res.send(lista)
})

app.listen(3000)