const express = require('express');
const router = express.Router();

// home route, redirects if there is no name provided to the '/hello'route
router.get('/', (req, res) => {
    const name = req.cookies.username;
    if (name) {
        res.render('index', {name : name});
    } else {
        res.redirect('/hello');
    }
});

router.get('/hello', (req, res) => {
    const name = req.cookies.username;
    if (name) {
        res.redirect('/');        
    } else {
        res.render('hello');        
    }
});

router.post('/hello', (req, res) => {
    res.cookie('username', req.body.username);
    res.redirect('/');
});

//goodbye logout button
router.post('/goodbye', (req, res) => {
    res.clearCookie('username');
    res.redirect('hello');
});


//505 route
router.use((err, req, res, next)=> {
    res.locals.error = err;
    res.status(err.status);
    res.render('error');
});

module.exports = router;