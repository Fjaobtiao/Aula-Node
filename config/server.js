// Modulo de configuração do app
const express = require('express')
const app = express()

// define o motor de views como sendo o EJS
app.set('view engine', 'ejs')

// configurar o caminho da pasta views
app.set('views', './app/views')

// configuração dos arquivos estáticos
app.use(express.static('./app/public'))

module.exports = app