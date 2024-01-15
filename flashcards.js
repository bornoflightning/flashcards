const express = require ('express');
const pug = require('pug');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');


const app = express();

const port = 3001;

//section for middlewear
app.use(bodyParser.urlencoded({extended : false}));
app.use(cookieParser());
app.set('view engine', 'pug');


app.get('/', (req, res) => {
    res.render('index');
})

app.get('/cards', (req, res) => {
    res.locals.prompt = "what color is the sky?"
    res.render('cards');
})

app.get('/hello', (req, res) => {
    res.render('hello');
});

app.post('/hello', (req, res) => {
    res.cookie('username', req.body.username);
    res.render('hello', {name: req.body.username});
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
});