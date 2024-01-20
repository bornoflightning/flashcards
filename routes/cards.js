const express = require('express');
const router = express.Router();
const {data} = require('../data/flashcardData.json');
const {cards} = data;

//('/cards')
router.get('/:id', (req, res) => {

    const{side} = req.query;
    const{id} = req.params;
    const text = cards[id][side];
    const {hint} = cards[id];

    if (side == 'question') {
        templateData.hint = hint;
    };

    res.render('cards', templateData);
});

module.exports = router;