// primeira etapa iniciar o npm
// npm init
// git init
// npm install express
// npm install -g nodemon
// 

// node app.js
// nodemon app.js

// lembrar que as informacoes do heroku mudam constantemente

const app = require('./config/server')

const noticias = require('./mockup')

// rota home
app.get('/', function(req, res){
    // o EJS disponibiliza o metodo render para usar nas respostas das requisições
    res.render('home/index', {noticias: noticias.slice(0, 3)})
})

// rota notícias
app.get('/noticias', function(req, res){
    res.render('noticias/noticias', {noticias: noticias})
})

// rota noticia
app.get('/noticia', function(req,res){
    // recupera id noticia por get
    const id = req.query.id
    res.render('noticias/noticia', {noticia: noticias[id]})
})

// rota admin
app.get('/admin', function(req, res){
    res.render('admin/form_add_noticias')
})

app.listen(3000, () => {
    console.log('Servidor rodando com express')
})