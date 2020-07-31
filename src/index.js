const express = require('express')
const server = express()

server.use(express.static("public"))

// habilitar o uso do req.body na nossa aplicação
server.use(express.urlencoded({extended: true}))

// utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

server.get('/', (req, res) => {
  return res.render("index.html")
})

server.get('/login', (req, res) => {
  return res.render("login.html")
})

server.get('/cadastro', (req, res) => {
  return res.render("register.html")
})

server.get('/home', (req, res) => {
  return res.render("home.html")
})

server.listen(3001)