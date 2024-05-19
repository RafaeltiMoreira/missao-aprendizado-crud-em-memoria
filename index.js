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

app.use(express.json())

app.post('/personagem', function (req, res) {
  const body = req.body
  const novoItem = body.nome
  lista.push(novoItem)
  res.send('Item adicionado com sucesso: ' + novoItem)
})

app.listen(3000)