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
//set up the view engine to use PUG
app.set('view engine', 'pug');
//imports for routes.js folder to use routes
app.use(mainRoutes);
app.use('/cards', cardRoutes);







app.listen(port, () => {
    console.log(`listening on port ${port}`)
});