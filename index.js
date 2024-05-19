const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

const lista = ['Java', 'Kotlin', 'Android']

app.get('/personagem', function (req, res) {
  res.send(lista)
})

app.get('/personagem/:id', function (req, res) {
  const id = req.params.id
  const item = lista[id - 1]
  res.send(item)
})

app.listen(3000)