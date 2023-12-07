var express = require('express');
var router = express.Router();
var notes = require('../data/notebooks');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(notes);
});

router.get('/deleteById', function(req, res, next) {
    notes.array.forEach(element => {
        if(element.id == )
    });
});

module.exports = router;