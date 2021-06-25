const express = require('express');
const questionController = require('./controllers/questionController')
const roomController = require('./controllers/roomController')

const route = express.Router()

// Rotas Get
route.get('/', (req, res) => {res.render("index", {page: 'enter-room'})})
route.get('/create-pass', (req, res) => res.render("index", {page: "create-pass"}))

route.get('/room/:room', (req, res) => res.render("room"))

// Rotas Post
// Formato que o formulário de dentro da Modal tem que passar a informação
route.post('/question/:room/:question/:action', questionController.index)
route.post('/create-room', roomController.create)

module.exports = route
