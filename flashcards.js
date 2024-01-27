const express = require ('express');
const pug = require('pug');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mainRoutes = require('./routes')
const cardRoutes = require('./routes/cards');


const app = express();

const port = 3001;

//section for middlewear
app.use(bodyParser.urlencoded({extended : false}));
app.use(cookieParser());

// routing static file to static
app.use('/static', express.static('public'));

//usual way of using static
// app.use(express.static(__dirname + '/public'));


//imports for routes.js folder to use routes
app.use(mainRoutes);
app.use('/cards', cardRoutes);

//set up the view engine to use PUG
app.set('view engine', 'pug');










app.listen(port, () => {
    console.log(`listening on port ${port}`)
});