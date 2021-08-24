// primeira etapa iniciar o npm
// npm init
// git init
// npm install express
// npm install -g nodemon
// npm install ejs



// node app.js
// nodemon app.js


const app = require('./config/server')

const noticias = require('./mockup')

// rota home
app.get('/', function(req, res){
    // o EJS disponibiliza o metodo render para usar nas respostas das requisições
    res.render('home/index')
})

// rota notícias
app.get('/noticias', function(req, res){
    res.render('noticias/noticias', {noticias: noticias})
})

app.get('/admin' , function(rep, res){
    res.render('admin/form_add_noticias')
})

app.listen(3000, () => {
    console.log('Servidor rodando com express')
})

