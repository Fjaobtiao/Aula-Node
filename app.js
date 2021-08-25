// primeira etapa iniciar o npm
// npm init
// git init
// npm install express
// npm install -g nodemon
// npm install express-session
 
// node app.js
// nodemon app.js

// lembrar que as informacoes do heroku mudam constantemente

// create table noticias(id_noticia serial primary key, titulo varchar(100) not null, conteudo text not null, data_criacao timestamp without time zone default (now() at time zone 'utc+3'))


// insert into noticias(titulo, conteudo) VALUE ('Banco de dados online', 'Foi realizado a primeira inserção de dados na tabela')

// select * from noticias

const app = require('./config/server')

const noticias = require('./mockup')

const db = require('./config/dbConnection')

// rota home
app.get('/', function(req, res){

    db.query('SELECT * FROM noticias ORDER BY id_noticia DESC LIMIT 3', function(error, result){
        console.log(result)


        res.render('home/index', {noticias: result.rows})
    })

})

// rota notícias
app.get('/noticias', function(req, res){
    db.query('SELECT * FROM noticias ORDER BY id_noticia DESC', function(error, result){
        res.render('noticias/noticias', {noticias: result.rows})
    })
})

// rota noticia
app.get('/noticia', function(req,res){
    // recupera id noticia por get
    const id = req.query.id
    db.query('SELECT * FROM noticias WHERE id_noticia = $1', [id], function(error, result){
        res.render('noticias/noticia', {noticia: result.rows[0]})
    })
})

// rota admin
app.get('/admin', function(req, res){
    if(req.session.autorizado){
        res.render('admin/form_add_noticias', {autorizado: req.session.autorizado})    
    } else {
        res.render('admin/login')
    }
})

// Rota responsável por salvar as notícias
app.post('/admin/salvar-noticia', function(req, res){
    // recuperação das informações passadas por POST
    let {titulo, conteudo} = req.body

    db.query('INSERT INTO noticias(titulo, conteudo) VALUES($1, $2)', [titulo, conteudo], function(error, result){
        res.redirect('/noticias')
    })
})

// rota responsável por autenticar o usuário
app.post('/admin/autenticar', function(req, res){
    const {usuario, senha} = req.body 
    if(usuario == 'root' && senha == 'cellep1234'){
        req.session.autorizado = true
    }

    res.redirect('/admin')
})

app.get('/admin/sair', function(req, res){
    req.session.destroy((erro) => {})
    res.redirect('/admin')
})

app.listen( process.env.PORT || 3000, () => {
    console.log('Servidor rodando com express')
})