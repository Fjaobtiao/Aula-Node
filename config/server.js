// Modulo de configuração do app
const express = require('express')
const app = express()

const session = require('express-session')

// define o motor de views como sendo o EJS
app.set('view engine', 'ejs')

// configurar o caminho da pasta views
app.set('views', './app/views')

// configuração dos arquivos estáticos
app.use(express.static('./app/public'))

// configura o bodyparse do express
app.use(express.urlencoded({extended: true}))

// configuração express-session
app.use(session({
    secret: '?4[8[B?_R:?d^$g)', //chave de segurança usada na assinatura dos identificadores da sessão
    resave: false, // otimiza para que a sessão não seja salva novamente
    saveUninitialized: false// otimiza o uso do armazenamento no servidor
}))

module.exports = app