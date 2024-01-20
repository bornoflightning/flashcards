const express = require('express');
const router = express.Router();

//('/cards')
router.get('/', (req, res) => {
    res.locals.prompt = "what color is the sky?"
    res.render('cards');
});

module.exports = router;