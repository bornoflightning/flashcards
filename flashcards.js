const express = require ('express');

const app = express();

const port = 3001;

app.set('view engine', 'pug');


app.get('/', (req, res) => {
    res.send("Hello World!!");
})

app.get('/hello', (req, res) => {
    res.send("Hello, Javascript!")
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
});